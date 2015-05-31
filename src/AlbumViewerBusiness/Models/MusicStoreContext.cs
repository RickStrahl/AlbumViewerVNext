using Microsoft.Data.Entity;
using Microsoft.Data.Entity.SqlServer.Extensions;
using Microsoft.Data.Entity.Metadata;
using System;
using Microsoft.Data.Entity.Infrastructure;
using Microsoft.Framework.ConfigurationModel;

namespace AlbumViewerBusiness
{
    public class MusicStoreContext : DbContext
    {

        /// <summary>
        /// The default constructor that provides for Dependency Injection
        /// </summary>
        /// <param name="serviceProvider"></param>
        public MusicStoreContext(IServiceProvider serviceProvider)
            : base(serviceProvider)
        {        
        }


        /// <summary>
        /// Manual Configuration that allows for manual instantiation.
        /// </summary>
        /// <param name="connectionString"></param>
        public MusicStoreContext(string connectionString)
               : base(GetConnectionString(connectionString))
        {
        }

        /// <summary>
        /// Default contructor that uses connection string value from a
        /// config.json file: Data:MusicStore:ConnectionString)
        /// </summary>
        public MusicStoreContext()
            : base(GetConnectionString())
        {
        }

        /// <summary>
        /// Gets ConnectionString
        /// </summary>
        /// <param name="connectionString"></param>
        /// <returns></returns>
        private static DbContextOptions GetConnectionString(string connectionString = null)
        {
            if (connectionString == null)
            {
                var configuration = new Configuration();
                configuration.AddJsonFile("config.json");
                connectionString = configuration.Get("Data:MusicStore:ConnectionString");
            }

            var options = new DbContextOptionsBuilder<MusicStoreContext>();
            options.UseSqlServer(connectionString);
            return options.Options;
        }

        public DbSet<Album> Albums { get; set; }
        public DbSet<Artist> Artists { get; set; }
        public DbSet<Track> Tracks { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ForSqlServer().UseIdentity();

            // Pluralization and key discovery not working based on
            // conventions
            builder.Entity<Album>(e =>
            {                
                e.Key(et=> et.Id);
                e.ForRelational().Table("Albums");
                e.Key(a => a.Id);
            });
            builder.Entity<Artist>(e =>
            {
                e.Key(et => et.Id);
                e.ForRelational().Table("Artists");
                e.Key(a => a.Id);
            });

            builder.Entity<Track>(e =>
            {
                e.Key(et => et.Id);
               e.ForRelational().Table("Tracks");
               e.Key(t => t.Id);
            });

            base.OnModelCreating(builder);


            ////builder.Entity<Album>().HasOne(typeof(Artist));
            ////builder.Entity<Album>().HasMany(typeof(Track));

            ////base.OnModelCreating(builder);

            ////// old 2

            //builder.Entity<Album>(e =>
            //{
            //    e.Key(a => a.Id);                
            //    e.ForRelational().Table("Albums");
            //    e.ForeignKey<Artist>(a => a.ArtistId);
            //    e.ManyToOne(a => a.Artist);
            //    e.OneToMany<Track>(a => a.Tracks);
            //});
            //builder.Entity<Artist>(e =>
            //{
            //    e.Key(a => a.Id);
            //    e.ForRelational().Table("Artists");
            //});
            //builder.Entity<Track>(e =>
            //{
            //    e.Key(t => t.Id);
            //    e.ForRelational().Table("Tracks");
            //    e.ForeignKey<Album>(a => a.AlbumId);
            //});

            //// old1 - beta 1

            ////var album = modelBuilder.Model.GetEntityType(typeof(Album));
            ////var artist = modelBuilder.Model.GetEntityType(typeof(Artist));
            ////var track = modelBuilder.Model.GetEntityType(typeof(Track));

        }
    }

    //public class MusicStoreContextOptions : DbContextOptions
    //{
    //    new DbContextOptions(
    //}
}