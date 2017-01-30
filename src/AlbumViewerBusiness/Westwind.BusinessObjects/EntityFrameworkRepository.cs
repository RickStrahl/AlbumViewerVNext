using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Westwind.Utilities;

namespace Westwind.BusinessObjects
{

    /// <summary>
    /// A base repository that provides basic CRUD operations.
    /// </summary>
    /// <typeparam name="TContext"></typeparam>
    /// <typeparam name="TEntity"></typeparam>
    public class EntityFrameworkRepository<TContext, TEntity>
        where TContext : DbContext
        where TEntity : class, new()
    {
        public EntityFrameworkRepository(TContext context)
        {
            Context = context;
        }
        
        /// <summary>
        /// Instance of the DbContext. Must be passed or 
        /// injected.
        /// </summary>
        public TContext Context { get; set; }

        /// <summary>
        /// Internally re-usable DbSet instance.
        /// </summary>
        protected DbSet<TEntity> DbSet
        {
            get
            {
                if (_dbSet == null)
                    _dbSet = Context.Set<TEntity>();
                return _dbSet;
            }
        }
        private DbSet<TEntity> _dbSet;
        

        /// <summary>
        /// A collection that can be used to hold errors or
        /// validation errors. 
        /// 
        /// Note you have to explicitly call Validate() to 
        /// validate explicit business rules you define in code
        /// as well as entity validation rules.
        /// 
        /// Calling Save() will not call this method to validate
        /// as it can potentially operate on multiple entities,
        /// but it will fail on entity validations.
        /// </summary>        
        public ValidationErrorCollection ValidationErrors
        {
            get
            {
                if (_validationErrors == null)
                    _validationErrors = new ValidationErrorCollection();
                return _validationErrors;
            }
        }
        ValidationErrorCollection _validationErrors;

        /// <summary>
        /// Determines whether the Validate method is automatically called
        /// in the Save() operation
        /// </summary>
        public bool AutoValidate { get; set; }

        /// <summary>
        /// Determines whether Save operations throw 
        /// exceptions or return errors as messages
        /// </summary>
        public bool ThrowExceptions { get; set; }

        /// <summary>
        /// Error Message of the last exception
        /// </summary>
        public string ErrorMessage
        {
            get
            {
                if (ErrorException == null)
                    return "";
                return ErrorException.Message;
            }
            set
            {
                if (string.IsNullOrEmpty(value))
                    ErrorException = null;
                else
                    // Assign a new exception
                    ErrorException = new Exception(value);
            }
        }

        /// <summary>
        /// Instance of an exception object that caused the last error
        /// </summary>
        public Exception ErrorException { get; set; }

        #region CRUD operations

        /// <summary>
        /// Creates a new instance of the entity type 
        /// associated to this Repo
        /// </summary>
        /// <returns></returns>
        public TEntity Create()
        {
            TEntity entity = new TEntity();
            Context.Add<TEntity>(entity);

            OnAfterCreated(entity);

            return entity;
        }

        
        /// <summary>
        /// Creates an instance of an enity type different
        /// than the one associated with this repo. Specify
        /// the entity type
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <returns></returns>
        public T Create<T>()
          where T : class, new()
        {
            var entity = new T();
            Context.Add<T>(entity);
            return entity;
        }

        /// <summary>
        /// Loads an entity by id. Default implementation returns only
        /// the base entity without relationships loaded.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public virtual async Task<TEntity> Load(object id)
        {            
            return await LoadBase(id);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="id"></param>
        /// <returns></returns>
        public virtual async Task<T> Load<T>(object id)
            where T : class, new()
        {

            return await LoadBase<T>(id);
        }

        /// <summary>
        /// Loads an instance based on its key field id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        protected virtual async Task<TEntity> LoadBase(object id)
        {
            object match = null;
            try
            {
                match = DbSet.Find(id);
                if (match == null)
                {
                    SetError("Unable to find matching entity for key");
                    return await Task.FromResult<TEntity>(null);
                }
            }
            catch (Exception ex)
            {
                // handles Sql errors                                
                SetError(ex);
            }
            
            // Assign to internal member
            var entity = match as TEntity;

            OnAfterLoaded(entity);
                        
            return await Task.FromResult<TEntity>(entity);            
        }

        /// <summary>
        /// Loads an entity instance based on its key field id
        /// and a custom type. OnEntityLoaded() is not fired in
        /// in this scenario as the type doesn't match.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        protected virtual async Task<T> LoadBase<T>(object id)
            where T : class, new()
        {
            T entity = null;
            try
            {
                var set = Context.Set<T>();                
                entity = set.Find(id);
                if (entity == null)
                {
                    SetError("Unable to find matching entity for key");
                    return await Task.FromResult<T>(null);
                }
            }
            catch (Exception ex)
            {
                // handles Sql errors                                
                SetError(ex);
            }
            
            return await Task.FromResult<T>(entity);            
        }

        /// <summary>
        /// Loads an entity by an expression
        /// </summary>
        /// <param name="whereClauseLambda"></param>
        /// <returns></returns>
        protected virtual async Task<TEntity> LoadBase(Expression<Func<TEntity, bool>> whereClauseLambda)
        {
            SetError();

            try
            {                
                var entity = await DbSet.FirstOrDefaultAsync(whereClauseLambda);

               
                return entity;
            }
            catch (InvalidOperationException)
            {
                // Handles errors where an invalid Id was passed, but SQL is valid                
                SetError("Couldn't load entity...");
                return null;
            }
            catch (Exception ex)
            {
                // handles Sql errors                                
                SetError(ex);
            }

            return null;
        }

        /// <summary>
        /// Saves changes to the repo
        /// </summary>
        /// <param name="entity">
        /// Pass the entity to save
        /// 
        /// You can omit the parameter if you just want to save the 
        /// current context. When no entity is passed no validation
        /// or OnBeforeSave()/OnAfterSave() are applied - just a plain
        /// SaveChanges        
        /// </param>
        /// <param name="useTransaction">
        /// not implemented yet
        /// </param>
        public async Task<bool> SaveAsync(TEntity entity = null)
        {            
            if (entity != null)
            {
                if (!OnBeforeSave(entity))
                    return false;

                if (AutoValidate && !Validate(entity))
                    return false;

                var entry = Context.Entry(entity);
                if (entry.State == EntityState.Detached)
                {
                    Context.Attach(entity);

                    // see if it exists
                    TEntity match = null;
                    try
                    {
                        object id = Context.GetEntityKey(entity).FirstOrDefault();
                        if (id != null)
                            match = DbSet.Find(id);
                    }
                    catch
                    {
                    }

                    if (match != null)
                        entry.State = EntityState.Modified;
                    else
                        entry.State = EntityState.Added;
                }
            }



            int result = -1;
            try
            {
                result = await Context.SaveChangesAsync();
                if (result == -1)
                    return false;
            }
            catch (Exception ex)
            {
                SetError(ex.GetBaseException());
                return false;
            }

            if (result == -1)
                return false;

            if (entity != null && !OnAfterSave(entity))
                return false;

            return true;
        }

        /// <summary>
        /// A transacted version of SaveAsync that explicitly uses a transaction around the
        /// save operation to handle OnBeforeSave() and OnAfterSave() operations.        
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="useTransaction"></param>
        /// <returns></returns>
        public async Task<bool> SaveAsync(TEntity entity, bool useTransaction)
        {
            if (useTransaction)
            {
                using (var tx = Context.Database.BeginTransaction())
                {
                    if (await SaveAsync(entity))
                    {
                        tx.Commit();
                        return true;
                    }
                    return false;
                }
            }

            return await SaveAsync(entity);
        }

        /// <summary>
        /// Saves the underlying data with Before and After Save hooks
        /// and optional validation.
        /// 
        /// If entity is not passed on SaveChanges is called
        /// </summary>
        /// <returns></returns>
        public bool Save(TEntity entity = null)
        {
            if (entity == null)
            {
                if (!OnBeforeSave(entity))
                    return false;

                if (AutoValidate && !Validate(entity))
                    return false;

                var entry = Context.Entry(entity);
                if (entry.State == EntityState.Detached)
                {
                    Context.Attach(entity);
                    var ids = Context.GetEntityKey(entity);
                    if (ids != null && ids.Length > 0)
                        entry.State = EntityState.Modified;
                    else
                        entry.State = EntityState.Added;
                }

            }

            try
            {
                int result = Context.SaveChanges();
                if (result == -1)
                    return false;
            }
            catch (Exception ex)
            {
                SetError(ex.GetBaseException());
                return false;
            }

            if (entity != null) { 
                if (!OnAfterSave(entity))
                    return false;
            }

            return true;
        }



        /// <summary>
        /// Deletes an entity from the main entity set
        /// based on a key value.
        /// </summary>
        /// <param name="id">Id of the key to delete</param>
        /// <param name="saveChanges">if true changes are saved to disk. Otherwise entity is removed from context only</param>
        /// <returns></returns>
        public virtual bool Delete(object id, bool saveChanges = false, bool useTransaction = false)
        {
            TEntity entity = DbSet.Find(id);
            return Delete(entity, saveChanges: saveChanges, useTransaction: useTransaction);
        }

        /// <summary>
        /// removes an individual entity instance.
        /// 
        /// This method allows specifying an entity in a dbSet other
        /// then the main one as long as it's specified by the dbSet
        /// parameter.
        /// </summary>
        /// <param name="entity">The entity to delete</param>        
        /// Allows specifying the DbSet to which the entity passed belongs.
        /// If not specified the current DbSet for the current entity is used </param>
        /// <param name="saveChanges">Optional - 
        /// If true does a Context.SaveChanges. Set to false
        /// when other changes in the Context are pending and you don't want them to commit
        /// immediately
        /// </param>
        /// <param name="useTransaction">Optional - 
        /// If true the Delete operation is wrapped into a TransactionScope transaction that
        /// ensures that OnBeforeDelete and OnAfterDelete all fire within the same Transaction scope.
        /// Defaults to false as to improve performance.
        /// </param>
        public virtual bool Delete(TEntity entity, bool saveChanges = true, bool useTransaction = false)
        {
            
            if (entity == null)
                return true;            

             if (!DeleteInternal(entity, saveChanges))
                return false;
          
            return true;
        }
        

        /// <summary>
        /// Actual delete operation that removes an entity
        /// </summary>
        protected virtual bool DeleteInternal(TEntity entity, bool saveChanges = false, bool useTransaction = false)
        {
            if (!OnBeforeDelete(entity))
                return false;

            var dbSet = Context.Set<TEntity>();

            try
            {
                dbSet.Remove(entity);

                // one operation that immediately submits
                if (saveChanges)
                    Context.SaveChanges();

                if (!OnAfterDelete(entity))
                    return false;
            }
            catch (Exception ex)
            {
                SetError(ex, true);
                return false;
            }

            return true;
        }
        #endregion



        #region validation

        /// <summary>
        /// Override this method to validate your business object.
        /// Set Validation Errors and return true or false from
        /// this method to indicate success or failure.
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        public virtual bool Validate(TEntity entity)
        {
            ValidationErrors.Clear();

            bool isValid = OnValidate(entity);
            if (!isValid)
                SetError(ValidationErrors.ToString());

            return isValid;
        }        
        #endregion


        #region event hooks
        
        /// <summary>
        /// Fired after an entity was created
        /// </summary>
        /// <param name="entity"></param>
        protected virtual void OnAfterCreated(TEntity entity)
        {

        }

        /// <summary>
        /// Fired after an entity was loaded
        /// </summary>
        /// <param name="entity"></param>
        protected virtual void OnAfterLoaded(TEntity entity)
        {
        }

        /// <summary>
        /// Overridable before save hook.
        /// Return false to indicate that the 
        /// Save() operation should not occur
        /// </summary>
        /// <returns></returns>
        protected virtual bool OnBeforeSave(TEntity entity)
        {
            return true;
        }

        /// <summary>
        /// Overridable after save hook. Called
        /// after SaveChanges() has completed.
        /// Return false in order to indicate
        /// to the caller that the save operation
        /// did not complete successfull (but
        /// data has been save
        /// </summary>
        protected virtual bool OnAfterSave(TEntity entity)
        {
            return true;
        }

        /// <summary>
        /// Overridable hook that is called after an entity is deleted.
        /// Return false return false for the Delete() method.
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        protected virtual bool OnAfterDelete(TEntity entity)
        {
            return true;
        }
        /// <summary>
        /// Overridable hook that is called before an entity is deleted.
        /// Return false to abort delete operation.
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        protected virtual bool OnBeforeDelete(TEntity entity)
        {
            return true;
        }


        /// <summary>
        /// Override this method to handle entity validation. Add any validation
        /// errors to the ValidationErrors collection to indicate that validation
        /// should fail.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="entity"></param>
        /// <returns></returns>
        protected virtual bool OnValidate(TEntity entity)
        {
            // *** typical use case
            // if (validationRuleFailed)
            //    ValidationErrors.Add("Error Message","object id");
            // return ValidationErrors.Count < 1;  // true - validate succeeds

            return ValidationErrors.Count < 1;
        }
        #endregion

        #region Error Handling

        /// <summary>
        /// Sets an internal error message.
        /// </summary>
        /// <param name="Message"></param>
        public void SetError(string Message)
        {
            if (string.IsNullOrEmpty(Message))
            {
                ErrorException = null;
                return;
            }

            ErrorException = new Exception(Message);

            //if (Options.ThrowExceptions)
            //    throw ErrorException;
        }

        /// <summary>
        /// Sets an internal error exception
        /// </summary>
        /// <param name="ex"></param>
        public void SetError(Exception ex, bool checkInnerException = false)
        {
            ErrorException = ex;

            if (checkInnerException)
            {
                while (ErrorException.InnerException != null)
                {
                    ErrorException = ErrorException.InnerException;
                }
            }

            ErrorMessage = ErrorException.Message;
            //if (ex != null && Options.ThrowExceptions)
            //    throw ex;
        }

        /// <summary>
        /// Clear out errors
        /// </summary>
        public void SetError()
        {
            ErrorException = null;
            ErrorMessage = null;
        }
        #endregion

    }
}