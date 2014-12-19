using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AlbumViewerBusiness
{
    public class Album
    {
       
        public int Id { get; set; }

        public int ArtistId { get; set; }
        
        public string Title { get; set; }
        public string Description { get; set; }
        public int Year { get; set; }
        public string ImageUrl { get; set; }
        public string AmazonUrl { get; set; }


        public virtual Artist Artist { get; set; }
        public virtual IList<Track> Tracks { get; set; }

        public Album()
        {
            Artist = new Artist();
            Tracks = new List<Track>();
        }

        public async Task<bool> LoadChildrenAsync(MusicStoreContext ctx)
        {
            Artist = await ctx.Artists.FirstOrDefaultAsync(art => art.Id == ArtistId);
            Tracks = await ctx.Tracks.Where(tk => tk.AlbumId == Id).ToListAsync();

            return true;
        }

        public async Task<bool> LoadArtistAsync(MusicStoreContext ctx)
        {
            Artist = await ctx.Artists.FirstOrDefaultAsync(art => art.Id == ArtistId);
            return true;
        }
        public async Task<bool> LoadTracksAsync(MusicStoreContext ctx)
        {
            Tracks = await ctx.Tracks.Where(tk => tk.AlbumId == Id).ToListAsync();
            return true;
        }

    }


    public class Artist
    {
        public int Id { get; set; }

        public string ArtistName { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public string AmazonUrl { get; set; }

        //public List<Album> Albums { get; set; }
    }

    
    public class Track
    {
        public int Id { get; set; }

        public int AlbumId { get; set; }
        
        public int ArtistId { get; set; }
        public string SongName { get; set; }
        public string Length { get; set; }
        public int Bytes { get; set; }
        public decimal UnitPrice { get; set; }

        public override string ToString()
        {
            return SongName;
        }
    }
}