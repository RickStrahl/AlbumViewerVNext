using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Metadata;
using Microsoft.Framework.OptionsModel;
using System;
using System.Linq;

namespace MusicStoreBusiness
{
public class MusicStoreContext : DbContext
{
    //public MusicStoreContext() : base(new MusicStoreContextOptions())
    //{ }

    public MusicStoreContext(IServiceProvider serviceProvider)
        : base(serviceProvider)
    {

    }
    public DbSet<Album> Albums { get; set; }
    public DbSet<Artist> Artists { get; set; }
    public DbSet<Track> Tracks { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Album>(e =>
        {
            e.Key(a => a.Id);
            e.ForRelational().Table("Albums");
            e.ForeignKey<Artist>(a => a.ArtistId);
            //e.OneToMany<Track>(a => a.Tracks).ForeignKey(t => t.AlbumId);
        });
        modelBuilder.Entity<Artist>(e =>
        {
            e.Key(a => a.Id);
            e.ForRelational().Table("Artists");
        });
        modelBuilder.Entity<Track>(e =>
        {
            e.Key(t => t.Id);
            e.ForRelational().Table("Tracks");
            e.ForeignKey<Album>(a => a.AlbumId);
        });

        var album = modelBuilder.Model.GetEntityType(typeof(Album));
        var artist = modelBuilder.Model.GetEntityType(typeof(Artist));
        var track = modelBuilder.Model.GetEntityType(typeof(Track));

        album.AddNavigation("Artist", album.ForeignKeys.Single(k => k.ReferencedEntityType == artist), pointsToPrincipal: true);
        album.AddNavigation("Tracks", track.ForeignKeys.Single(k => k.ReferencedEntityType == album), pointsToPrincipal: false);
    }
}

    public class MusicStoreContextOptions : DbContextOptions
    {        
    }
}