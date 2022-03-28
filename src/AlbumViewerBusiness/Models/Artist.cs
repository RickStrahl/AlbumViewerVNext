using System.Diagnostics;

namespace AlbumViewerBusiness
{


    /// <summary>
    /// Music Artists
    /// </summary>
    [DebuggerDisplay("{ArtistName}")]
    public class Artist
    {
        public int Id { get; set; }

        /// <summary>
        /// Name of the band or artist
        /// </summary>
        public string ArtistName { get; set; }


        /// <summary>
        /// Detailed description of the band or artist and their history.
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// A band image
        /// </summary>
        public string ImageUrl { get; set; }

        /// <summary>
        /// Link to the band summary on Amazon
        /// </summary>
        public string AmazonUrl { get; set; }

    }

    public class ArtistWithAlbumCount : Artist
    {
        public int AlbumCount { get; set; }
    }
}