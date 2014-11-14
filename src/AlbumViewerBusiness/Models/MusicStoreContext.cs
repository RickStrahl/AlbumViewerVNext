using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Metadata;
using Microsoft.Framework.OptionsModel;
using System;

namespace MusicStoreBusiness
{
public class MusicStoreContext :  DbContext
{
    //public MusicStoreContext() : base(new MusicStoreContextOptions())
    //{ }

    public MusicStoreContext(IServiceProvider serviceProvider)
        : base(serviceProvider)
    {

    }
    public DbSet<Album> Albums { get; set; }
    public DbSet<Artist> Artists { get; set;  }
    public DbSet<Track> Tracks { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Album>(e =>
        {
            e.Key(a => a.Id);
            e.ForRelational().Table("Albums");
            e.OneToMany<Track>(a => a.Tracks).ForeignKey(t => t.AlbumId);

            // TODO: Can't figure out how to make this relationship work
            //       This does not work nor does OneToOne()
            e.ManyToOne(alb => alb.Artist).ForeignKey(art => art.ArtistId);
        });
        modelBuilder.Entity<Artist>(e =>
        {
            e.ForRelational().Table("Artists");
        });
        modelBuilder.Entity<Track>(e =>
        {
            e.ForRelational().Table("Tracks");
        });
    }
}

    public class MusicStoreContextOptions : DbContextOptions
    {        
    }
}