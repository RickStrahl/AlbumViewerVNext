using Microsoft.Data.Entity;
using System;

namespace AlbumViewerBusiness
{
    public class AlbumViewerContext : DbContext
    {

        public string ConnectionString { get; set; }
        //public static IConfiguration Configuration { get; set; }
        protected static IServiceProvider ServiceProvider { get; set; }


        /// <summary>
        /// The default constructor that provides for Dependency Injection
        /// </summary>
        /// <param name="serviceProvider"></param>
        public AlbumViewerContext(IServiceProvider serviceProvider)
            : base(serviceProvider)
        {
            if (ServiceProvider == null)
                ServiceProvider = serviceProvider;
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
        //public AlbumViewerContext() //: base(GetOptions(null))
        //{
        //}

        //public AlbumViewerContext(string connString) : base(GetOptions(connString))
        //{
        //}


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
        //private static DbContextOptions GetOptions(string connectionString)
        //{
        //    if (connectionString == null)
        //    {
        //        //var builder = new ConfigurationBuilder();
        //        //builder.AddJsonFile("config.json");
        //        //var configuration = builder.Build();
        //        var configuration = ServiceProvider.GetService(typeof(IConfiguration)) as IConfiguration;
        //        connectionString = configuration.Get("Data:MusicStore:ConnectionString");
        //    }

        //    var options = new DbContextOptionsBuilder<AlbumViewerContext>();
        //    options.UseSqlServer(connectionString);
        //    return options.Options;
        //}

        public DbSet<Album> Albums { get; set; }
        public DbSet<Artist> Artists { get; set; }
        public DbSet<Track> Tracks { get; set; }
        public DbSet<User> Users { get; set;  }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);

            if (optionsBuilder.IsConfigured)
                return;

            //throw new InvalidOperationException(
            //    "MusicStoreContext not configured. Please use either DI or one of the parametered constructors to provide configuration information");

            //var builder = new ConfigurationBuilder();  // this is the problem: needs basepath
            //builder.AddJsonFile("config.json");
            //var configuration = builder.Build();
            //string connectionString = configuration.Get("Data:MusicStore:ConnectionString");

            //optionsBuilder.UseSqlServer(connectionString);

        }


        protected override void OnModelCreating(ModelBuilder builder)
        {
            //builder.ForSqlServer().UseIdentity();

            // Pluralization and key discovery not working based on conventions
            builder.Entity<Album>(e =>
            {
                e.ToTable("Albums");
                
            });
            builder.Entity<Artist>(e =>
            {
                e.ToTable("Artists");
            });

            builder.Entity<Track>(e =>
            {
                e.ToTable("Tracks");
            });

            builder.Entity<User>(e =>
            {
                e.ToTable("Users");
            });

            base.OnModelCreating(builder);
        }
    }
}