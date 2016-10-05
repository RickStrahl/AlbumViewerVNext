
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Westwind.BusinessObjects;
using Westwind.Utilities;

namespace AlbumViewerBusiness
{
    public class ArtistRepository : EntityFrameworkRepository<AlbumViewerContext,Artist>
    {    
        public ArtistRepository(AlbumViewerContext context)
            : base(context)
        { }


        /// <summary>
        /// Returns an individual Artist
        /// </summary>
        /// <param name="objId"></param>
        /// <returns></returns>
        //public override async Task<Artist> Load(object objId)
        //{            
        //    int id = (int)objId;
        //    return  await LoadBase(art => art.Id == id);
        //}


        public async Task<List<ArtistWithAlbum>> GetAllArtists()
        {
            return await Context.Artists
                .OrderBy(art => art.ArtistName)
                .Select(art => new ArtistWithAlbum()
                {
                    ArtistName = art.ArtistName,
                    Description = art.Description,
                    ImageUrl = art.ImageUrl,
                    Id = art.Id,
                    AmazonUrl = art.AmazonUrl,
                    AlbumCount = Context.Albums.Count(alb => alb.ArtistId == art.Id)
                })
                .ToListAsync();
        }

        /// <summary>
        /// Returns a list of albums for a given artist
        /// </summary>
        /// <param name="artistId"></param>
        /// <returns></returns>
        public async Task<List<Album>> GetAlbumsForArtist(int artistId)
        {
            return await Context.Albums
                .Include(a => a.Tracks)
                .Include(a => a.Artist)
                .Where(a => a.ArtistId == artistId)
                .ToListAsync();
        }


        /// <summary>
        /// Artist look up by name - used for auto-complete box returns
        /// </summary>
        /// <param name="search"></param>
        /// <returns></returns>
        public async Task<List<ArtistLookupItem>> ArtistLookup(string search = null)
        {
            if (string.IsNullOrEmpty(search))
                return new List<ArtistLookupItem>();

            var repo = new AlbumRepository(Context);

            var term = search.ToLower();
            return await repo.Context.Artists
                .Where(a => a.ArtistName.ToLower().StartsWith(term))
                .Select(a => new ArtistLookupItem
                {
                    name = a.ArtistName,
                    id = a.ArtistName
                })
                .ToListAsync();
        }

        /// <summary>
        /// Pass in an external instance of an artist and either
        /// update or create that artist as an instance
        /// </summary>
        /// <param name="postedArtist"></param>
        /// <returns></returns>
        public async Task<Artist> SaveArtist(Artist postedArtist)
        {
            int id = postedArtist.Id;

            Artist artist;
            if (id < 1)
                artist = Create<Artist>();
            else
            {
                artist = Context.Artists.FirstOrDefault(a => a.Id == id);
                if (artist == null)
                    artist = Create<Artist>();
            }

            DataUtils.CopyObjectData(postedArtist, artist, "Id");

            if (!await SaveAsync())
                return null;

            return artist;
        }

        public async Task<bool> DeleteArtist(int id)
        {
            var artist = await Context.Artists.FirstOrDefaultAsync(art => art.Id == id);

            // already gone
            if (artist == null)
                return true;

            var albumIds = await Context.Albums.Where(alb => alb.ArtistId == id).Select(alb => alb.Id).ToListAsync();

            var albumRepo = new AlbumRepository(Context);

            foreach (var albumId in albumIds)
            {                
                // don't run async or we get p
                bool result = await albumRepo.DeleteAlbum(albumId);
                if (!result)
                    return false;
            }

            Context.Artists.Remove(artist);

            return await SaveAsync();            
        }

    }

    public class ArtistLookupItem
    {
        public string name { get; set; }
        public string id { get; set; }
    }
}