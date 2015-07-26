using Microsoft.Data.Entity;
using Microsoft.Data.Entity.SqlServer.Extensions;
using Microsoft.Data.Entity.Metadata;
using System;
using Microsoft.Data.Entity.Infrastructure;
using Microsoft.Framework.Configuration;

namespace AlbumViewerBusiness
{
    public class AlbumViewerContext : DbContext
    {

        public string ConnectionString { get; set; }
        public static IConfiguration Configuration { get; set; }


        /// <summary>
        /// The default constructor that provides for Dependency Injection
        /// </summary>
        /// <param name="serviceProvider"></param>
        public AlbumViewerContext(IServiceProvider serviceProvider)
            : base(serviceProvider)
        {
            var x = 1;
            x++;

            var config = serviceProvider.GetService(typeof(IConfiguration));

            x++;
        }


        ///// <summary>
        ///// Manual Configuration that allows for manual instantiation.
        ///// </summary>
        ///// <param name="connectionString"></param>
        //public MusicStoreContext(string connectionString)
        //       : base(GetConnectionString(connectionString))
        //{
        //}

        /// <summary>
        /// Default contructor that uses connection string value from a
        /// config.json file: Data:MusicStore:ConnectionString)
        /// </summary>
        public AlbumViewerContext()
        {
        }


        //public AlbumViewerContext()
        //{
        //    // Not what we want here
        //}
        //public AlbumViewerContext()
        //{
        //    // Not what we want here
        //}

        /// <summary>
        /// Gets ConnectionString
        /// </summary>
        /// <param name="connectionString"></param>
        /// <returns></returns>
        private static EntityOptions GetConnectionString(string connectionString = null)
        {
            if (connectionString == null)
            {
                var builder = new ConfigurationBuilder();
                builder.AddJsonFile("config.json");
                var configuration = builder.Build();
                connectionString = configuration.Get("Data:MusicStore:ConnectionString");
            }

            var options = new EntityOptionsBuilder<AlbumViewerContext>();
            options.UseSqlServer(connectionString);
            return options.Options;
        }

        public DbSet<Album> Albums { get; set; }
        public DbSet<Artist> Artists { get; set; }
        public DbSet<Track> Tracks { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            //builder.ForSqlServer().UseIdentity();

            // Pluralization and key discovery not working based on
            // conventions
            builder.Entity<Album>(e =>
            {                
                e.Key(et=> et.Id);
                e.Table("Albums");
                e.Key(a => a.Id);
            });
            builder.Entity<Artist>(e =>
            {
                e.Key(et => et.Id);
                e.Table("Artists");
                e.Key(a => a.Id);
            });

            builder.Entity<Track>(e =>
            {
               e.Key(et => et.Id);
               e.Table("Tracks");
               e.Key(t => t.Id);
            });

            base.OnModelCreating(builder);
        }
    }
}