using Microsoft.EntityFrameworkCore;
using System;
using Microsoft.Extensions.Configuration;

namespace AlbumViewerBusiness
{
    public class AlbumViewerContext : DbContext
    {
        IConfiguration Configuration { get; }

        public string ConnectionString { get; set; }

        public AlbumViewerContext(DbContextOptions options, IConfiguration config) : base(options)
        {
            Configuration = config;
        }

        public DbSet<Album> Albums { get; set; }
        public DbSet<Artist> Artists { get; set; }
        public DbSet<Track> Tracks { get; set; }
        public DbSet<User> Users { get; set;  }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);

            if (optionsBuilder.IsConfigured)
                return;

            ConnectionString = Configuration.GetValue<string>("Data:AlbumViewer:ConnectionString");
            optionsBuilder.UseSqlServer(ConnectionString);
        }


        protected override void OnModelCreating(ModelBuilder builder)
        {         
            // no longer necessary - pluralization works in RC2            
            //builder.Entity<Album>(e =>
            //{
            //    e.ToTable("Albums");

            //});
            //builder.Entity<Artist>(e =>
            //{
            //    e.ToTable("Artists");
            //});

            //builder.Entity<Track>(e =>
            //{
            //    e.ToTable("Tracks");
            //});

            //builder.Entity<User>(e =>
            //{
            //    e.ToTable("Users");
            //});

            base.OnModelCreating(builder);
        }
    }
}