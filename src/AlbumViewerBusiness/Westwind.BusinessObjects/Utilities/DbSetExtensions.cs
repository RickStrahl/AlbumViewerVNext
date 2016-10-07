using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Internal;
using System.Reflection;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace Westwind.BusinessObjects
{

    /// <summary>
    /// Add missing Find() method to dbContext
    /// </summary>
    public static class DbSetExtensions
    {

        /// <summary>
        /// Manual implementation of Find()
        /// </summary>
        /// <typeparam name="TEntity"></typeparam>
        /// <param name="set"></param>
        /// <param name="keyValues"></param>
        /// <returns></returns>
        /// <remarks>
        /// based on post: https://weblogs.asp.net/ricardoperes/implementing-missing-features-in-entity-framework-core?__r=8d3ec9c92c78bf8
        /// </remarks>
        public static TEntity Find<TEntity>(this DbSet<TEntity> set, params object[] keyValues) where TEntity : class
        {
            // This doesn't work
            //var svcs = set.GetInfrastructure().GetService<IDbContextServices>();
            ///var context = svcs.CurrentContext.Context;
            

            var prop = set.GetType()
                .GetField("_context", BindingFlags.GetField | BindingFlags.NonPublic | BindingFlags.Instance);

            var context = prop
                .GetValue(set) as DbContext;
             
            var entityType = context.Model.FindEntityType(typeof(TEntity));
            var keys = entityType.GetKeys();
            var entries = context.ChangeTracker.Entries<TEntity>();
            var parameter = Expression.Parameter(typeof(TEntity), "x");
            IQueryable<TEntity> query = context.Set<TEntity>();

            //first, check if the entity exists in the cache
            var i = 0;

            //iterate through the key properties
            foreach (var property in keys.SelectMany(x => x.Properties))
            {
                var keyValue = keyValues[i];

                //try to get the entity from the local cache
                entries = entries.Where(e => keyValue.Equals(e.Property(property.Name).CurrentValue));

                //build a LINQ expression for loading the entity from the store
                var expression = Expression.Lambda(
                    Expression.Equal(
                        Expression.Property(parameter, property.Name),
                        Expression.Constant(keyValue)),
                    parameter) as Expression<Func<TEntity, bool>>;

                query = query.Where(expression);

                i++;
            }

            var entity = entries.Select(x => x.Entity).FirstOrDefault();
            if (entity != null)
                return entity;

            //second, try to load the entity from the data store
            entity = query.FirstOrDefault();

            return entity;
        }

        /// <summary>
        /// Returns an entity key for a give entity
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="context"></param>
        /// <param name="entity"></param>
        /// <returns></returns>
        public static object[] GetEntityKey<T>(this DbContext context, T entity) where T : class
        {
            var state = context.Entry(entity);
            var metadata = state.Metadata;
            var key = metadata.FindPrimaryKey();
            var props = key.Properties.ToArray();

            return props.Select(x => x.GetGetter().GetClrValue(entity)).ToArray();
        }
    }
}
