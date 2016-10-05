
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Westwind.BusinessObjects;
using Westwind.Utilities;

namespace AlbumViewerBusiness
{
    public class AlbumRepository : EntityFrameworkRepository<AlbumViewerContext,Album>
    {    
        public AlbumRepository(AlbumViewerContext context)
            : base(context)
        { }


        /// <summary>
        /// Loads and individual album
        /// </summary>
        /// <param name="objId"></param>
        /// <returns></returns>
        public override async Task<Album> Load(object objId)
        {            
            Album album = null;
            try
            {
                int id = (int) objId;
                album = await Context.Albums
                    .Include(ctx => ctx.Tracks)
                    .Include(ctx => ctx.Artist)
                    .FirstOrDefaultAsync(alb => alb.Id == id);
            }
            catch (InvalidOperationException)
            {
                // Handles errors where an invalid Id was passed, but SQL is valid                
                SetError("Couldn't load entity...");
                return null;
            }
            catch (Exception ex)
            {
                // handles Sql errors                                
                SetError(ex);
            }

            return album;
        }



        public async Task<List<Album>> GetAllAlbums(int page, int pageSize = 15)
        {
            IQueryable<Album> enumResult = Context.Albums
                .Include(ctx => ctx.Tracks)
                .Include(ctx => ctx.Artist)
                .OrderBy(alb => alb.Title);

            if (page > 0)
            {
                enumResult = enumResult
                                .Skip((page - 1) * pageSize)
                                .Take(pageSize);
            }

            return await enumResult.ToListAsync();
        }

        public async Task<Album> SaveAlbum(Album postedAlbum)
        {
            int id = postedAlbum.Id;            
            
            Album album = null;
            if (id < 1)
            {
                album = new Album();
                Context.Albums.Add(album);
            }
            else
            {
                album = await Context.Albums
                    .Include(ctx => ctx.Tracks)
                    .Include(ctx => ctx.Artist)
                    .SingleOrDefaultAsync(alb => alb.Id == id);
            }

            // check for existing artist and assign if matched
            if (album.Artist.Id < 1)
            {
                var artist = await Context.Artists
                                          .FirstOrDefaultAsync(art => art.ArtistName == postedAlbum.Artist.ArtistName);
                if (artist != null)   
                    album.Artist.Id = artist.Id;
            }

            DataUtils.CopyObjectData(postedAlbum.Artist, album.Artist, "Id");

            // new artist 
            if (album.Artist.Id < 1)
                Context.Artists.Add(album.Artist);
            
            //result = Context.SaveChanges();

            album.ArtistId = album.Artist.Id;
            DataUtils.CopyObjectData(postedAlbum, album, "Tracks,Artist,Id,ArtistId");
           
            //result = Context.SaveChanges();

            int albumId = album.Id;

            foreach (var postedTrack in postedAlbum.Tracks)
            {
                var track = album.Tracks.FirstOrDefault(trk => trk.Id == postedTrack.Id);
                if (postedTrack.Id > 0 && track != null)
                    DataUtils.CopyObjectData(postedTrack, track);
                else
                {
                    track = new Track();
                    Context.Tracks.Add(track);
                    DataUtils.CopyObjectData(postedTrack, track, "Id,AlbumId,ArtistId");
                    album.Tracks.Add(track);
                    //track.AlbumId = albumId;
                }
                
            }

            // find tracks to delete - first looks for those posted (except 0 ids)
            var postedIds = postedAlbum.Tracks
                .Where(t => t.Id > 0)
                .Select(t => t.Id)
                .ToList();

            // then delete all those that don't exist in the actual albums
            var deletedTracks = album.Tracks
                .Where(trk => trk.Id > 0 && !postedIds.Contains(trk.Id))
                .ToList();


            if (deletedTracks.Count > 0)
            {
                foreach (var dtrack in deletedTracks)
                {
                    // This works (but parent instance isn't updated after SubmitChanges())
                    Context.Tracks.Remove(dtrack);

                    // BUG: this bonks!                    
                    //album.Tracks.Remove(dtrack);
                }
            }

            if (!await SaveAsync())
                return null;

            return album;
        }                

        public async Task<bool> DeleteAlbum(int id)
        {
            // manually delete tracks
            var tracks = await Context.Tracks.Where(t => t.AlbumId == id).ToListAsync();
            for (int i = tracks.Count - 1; i > -1; i--)
            {
                var track = tracks[i];                
                tracks.Remove(track);
                Context.Tracks.Remove(track);
            }

            var album = await Context.Albums
                .FirstOrDefaultAsync(a => a.Id == id);

            if (album == null)
            {
                SetError("Invalid album id.");
                return false;
            }

            Context.Albums.Remove(album);

            // don't do the save asynchronously to avoid
            // overlapping delete updates            
            var result = await SaveAsync();

            return result;
        }

    }

}