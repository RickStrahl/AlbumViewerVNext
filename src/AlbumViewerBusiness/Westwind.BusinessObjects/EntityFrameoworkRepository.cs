using Microsoft.Data.Entity;
using System;
using System.Threading.Tasks;
using Westwind.Utilities;

namespace Westwind.BusinessObjects
{
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

        /// <summary>
        /// Creates a new instance of the entity type 
        /// associated to this Repo
        /// </summary>
        /// <returns></returns>
        public TEntity Create()
        {
            TEntity entity = new TEntity();
            Context.Add<TEntity>(entity);
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

        public TEntity Load(object id)
        {
            throw new NotImplementedException();            
        }

        public TEntity Load<T>(object id)
            where T : class, new()
        {
            throw new NotImplementedException();            
        }

        public bool Validate(TEntity entity)
        {
            bool result = OnValidate<TEntity>(entity);
            return result;
        }

        public bool Validate<T>(T entity = null)
            where T : class, new()
        {
            bool result = OnValidate<T>(entity);
            return result;
        }


        /// <summary>
        /// Saves changes to the repo
        /// </summary>
        public async Task<bool> SaveAsync()
        {
            if (!OnBeforeSave())
                return false;

            int result = await Context.SaveChangesAsync();

            if (result == -1)
                return false;

            if (!OnAfterSave())
                return false;

            return true;
        }

        /// <summary>
        /// Saves the underlying data with hooks
        /// </summary>
        /// <returns></returns>
        public bool Save()
        {
            if (!OnBeforeSave())
                return false;

            int result = Context.SaveChanges();
            if (result == -1)
                return false;


            if (!OnAfterSave())
                return false;

            return true;
        }


        /// <summary>
        /// Overridable before save hook.
        /// Return false to indicate that the 
        /// Save() operation should not occur
        /// </summary>
        /// <returns></returns>
        protected virtual bool OnBeforeSave()
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
        protected virtual bool OnAfterSave()
        {
            return true;
        }

        protected bool OnValidate<T>(T entity)
        {
            return true;
        }


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

    }
}