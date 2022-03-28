using System.Diagnostics;

namespace AlbumViewerBusiness
{
    /// <summary>
    /// A song on an album
    /// </summary>

    [DebuggerDisplay("{SongName}")]
    public class Track
    {
        public int Id { get; set; }
        public int AlbumId { get; set; }                

        /// <summary>
        /// Song name on the album
        /// </summary>
        public string SongName { get; set; }

        /// <summary>
        /// Length in mm:ss format
        /// </summary>
        public string Length { get; set; }

        /// <summary>
        /// Size of the song for downloaded music
        /// </summary>
        public int Bytes { get; set; }

        /// <summary>
        /// Price of the individual track
        /// </summary>
        public decimal UnitPrice { get; set; }

        public override string ToString()
        {
            return SongName;
        }
    }
}