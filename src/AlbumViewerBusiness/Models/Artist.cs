using System.Diagnostics;

namespace AlbumViewerBusiness
{
    [DebuggerDisplay("{ArtistName}")]
    public class Artist
    {
        public int Id { get; set; }
        public string ArtistName { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public string AmazonUrl { get; set; }

        //public List<Album> Albums { get; set; }
    }

    public class ArtistWithAlbumCount : Artist
    {
        public int AlbumCount { get; set; }
    }
}