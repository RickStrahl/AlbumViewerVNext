using System;
using System.Linq;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MusicStoreBusiness
{
    [Table("Albums")]
    public class Album
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("Artists")]
        public int ArtistId { get; set; }

        public string Title { get; set; }
        public string Description { get; set; }
        public int Year { get; set; }
        public string ImageUrl { get; set; }
        public string AmazonUrl { get; set; }

        
        public virtual Artist Artist {get; set; }
        public virtual IList<Track> Tracks { get; set; }

        public Album()
        {
            Artist = new Artist();
            Tracks = new List<Track>();
        }

        public void LoadChildren(MusicStoreContext ctx)
        {
            Artist = ctx.Artists.FirstOrDefault(art => art.Id == ArtistId);
            Tracks = ctx.Tracks.Where(tk => tk.AlbumId == Id).ToList();
        }
    }

    [Table("Artists")]
    public class Artist
    {
        [Key]
        public int Id { get; set; }

        public string ArtistName { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public string AmazonUrl { get; set; }

        public List<Album> Albums { get; set; }
    }

    public class Track
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("Albums")]
        public int AlbumId { get; set; }
        
        public int ArtistId { get; set; }
        public string SongName { get; set; }
        public string Length { get; set; }
        public int Bytes { get; set; }
        public decimal UnitPrice { get; set; }
    }
}