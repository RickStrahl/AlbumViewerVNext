using Microsoft.Data.Entity;
using System;
using System.Threading.Tasks;

namespace Westwind.BusinessObjects
{
    public class EntityFrameworkRepository<TContext, TEntity>
        where TContext : DbContext
        where TEntity : class, new()
    {
        public TContext Context { get; set; }

        public EntityFrameworkRepository(TContext context)
        {
            Context = context;
        }

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
            return null;
        }

        public TEntity Load<T>(object id)
            where T : class, new()
        {
            throw new NotImplementedException();
            return null;
        }

        public bool Validate(TEntity entity = null)
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
        public async Task<int> Save()
        {
            OnBeforeSave();

            int result = await Context.SaveChangesAsync();

            OnAfterSave();

            return result;
        }


        protected void OnBeforeSave()
        {

        }

        protected void OnAfterSave()
        {

        }

        protected bool OnValidate<T>(T entity)
        {
            return true;
        }

    }
}