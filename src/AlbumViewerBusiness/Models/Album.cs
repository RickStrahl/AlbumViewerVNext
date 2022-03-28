using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics;

namespace AlbumViewerBusiness
{

    /// <summary>
    /// Individual music album
    /// </summary>
    [DebuggerDisplay("{Title} {Artist.ArtistName}")]
    public class Album
    {           
        public int Id { get; set; }
       
        /// <summary>
        /// Name of the album
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// Detailed description of the album
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// Year the album was released
        /// </summary>
        public int Year { get; set; }


        public string ImageUrl { get; set; }
        public string AmazonUrl { get; set; }
        public string SpotifyUrl { get; set; }

        
        [ForeignKey("Artist")]
        public int ArtistId { get; set; } 
        public virtual Artist Artist { get; set; }
        public virtual IList<Track> Tracks { get; set; }

        public Album()
        {
        }

    }
}