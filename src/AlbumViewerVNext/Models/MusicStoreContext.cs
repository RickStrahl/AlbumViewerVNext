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
        }

    }

    public class MusicStoreContextOptions : DbContextOptions
    {        
    }
}