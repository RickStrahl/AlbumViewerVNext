using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Metadata;
using Microsoft.Framework.OptionsModel;
using System;

namespace MusicStoreBusiness
{
    public class MusicStoreContext :  DbContext
    {
        public MusicStoreContext() : base(new MusicStoreContextOptions())
        { }

        public MusicStoreContext(IServiceProvider serviceProvider, IOptionsAccessor<MusicStoreContextOptions> optionsAccessor)
            : base(serviceProvider, optionsAccessor.Options)
        {

        }
        public DbSet<Album> Albums { get; set; }
        public DbSet<Artist> Artists { get; set;  }
        public DbSet<Track> Tracks { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // pluralizer isn't working yet
            modelBuilder.Entity<Album>().ToTable("Albums");
            modelBuilder.Entity<Artist>().ToTable("Artists");
            modelBuilder.Entity<Track>().ToTable("Tracks");

            // Manually hook up relationships
            //modelBuilder.Entity<Album>().ForeignKey<Artist>(alb=> alb.ArtistId);
            modelBuilder.Entity<Album>(alb =>
           {
               alb.OneToMany(a => a.Tracks);
           });
           modelBuilder.Entity<Album>().OneToOne(alb => alb.Artist).ForeignKey<Album>(alb => alb.ArtistId);
        }

    }

    public class MusicStoreContextOptions : DbContextOptions
    {        
    }
}