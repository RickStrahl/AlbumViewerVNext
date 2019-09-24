using System.Diagnostics;

namespace AlbumViewerBusiness
{

    [DebuggerDisplay("{SongName}")]
    public class Track
    {
        public int Id { get; set; }
        public int AlbumId { get; set; }                
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