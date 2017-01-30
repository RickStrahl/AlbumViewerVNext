
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
        /// Loads and individual album.
        /// 
        /// Implementation is custom not using base.Load()
        /// in order to include related entities
        /// </summary>
        /// <param name="objId">Album Id</param>
        /// <returns></returns>
        public override async Task<Album> Load(object albumId)
        {                        
            Album album = null;
            try
            {
                int id = (int) albumId;
                album = await Context.Albums
                    .Include(ctx => ctx.Tracks)
                    .Include(ctx => ctx.Artist)
                    .FirstOrDefaultAsync(alb => alb.Id == id);

                if (album != null)
                    OnAfterLoaded(album);
            }
            catch (InvalidOperationException)
            {
                // Handles errors where an invalid Id was passed, but SQL is valid                
                SetError("Couldn't load album - invalid album id specified.");
                return null;
            }
            catch (Exception ex)
            {
                // handles Sql errors                                
                SetError(ex);
            }

            return album;
        }



        public async Task<List<Album>> GetAllAlbums(int page = 0, int pageSize = 15)
        {
            IQueryable<Album> albums = Context.Albums
                .Include(ctx => ctx.Tracks)
                .Include(ctx => ctx.Artist)
                .OrderBy(alb => alb.Title);

            if (page > 0)
            {
                albums = albums
                                .Skip((page - 1) * pageSize)
                                .Take(pageSize);
            }

            return await albums.ToListAsync();
        }

        /// <summary>
        /// This code is rather complex as EF7 can't work out
        /// the related entity updates for artist and tracks, 
        /// so this code manually  updates artists and tracks 
        /// from the saved entity using code.
        /// </summary>
        /// <param name="postedAlbum"></param>
        /// <returns></returns>
        public async Task<Album> SaveAlbum(Album postedAlbum)
        {
            int id = postedAlbum.Id;

            Album album;

            if (id < 1)
                album = Create();
            else
            {
                album = await Load(id);
                if (album == null)
                    album = Create();
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

            album.ArtistId = album.Artist.Id;
            DataUtils.CopyObjectData(postedAlbum, album, "Tracks,Artist,Id,ArtistId");



            // add or udpate tracks
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
                }
            }
            

            // then find all deleted tracks not in new tracks
            var deletedTracks = album.Tracks
                .Where(trk => trk.Id > 0 && 
                                !postedAlbum.Tracks
                                    .Where(t => t.Id > 0)
                                    .Select(t => t.Id)
                                .Contains(trk.Id) )
                .ToList();

            foreach (var dtrack in deletedTracks)
                album.Tracks.Remove(dtrack);

            //now lets save it all
            if (!await SaveAsync())
                return null;

            return album;
        }
        
        
        public async Task<bool> DeleteAlbum(int id)
        {
            using (var tx = Context.Database.BeginTransaction())
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

                var result = await SaveAsync();
                if (result)
                    tx.Commit();

                return result;
            }
        }

        protected override bool OnValidate(Album entity)
        {
            if (entity == null)
            {
                ValidationErrors.Add("No item was passed.");
                return false;
            }

            if (string.IsNullOrEmpty(entity.Title))
                ValidationErrors.Add("Please enter a title for this album.","Title");
            else if(string.IsNullOrEmpty(entity.Description) || entity.Description.Length < 30)
                ValidationErrors.Add("Please provide a description of at least 30 characters.");
            else if (entity.Tracks.Count < 1)
                ValidationErrors.Add("Album must have at least one song associated.");

            return ValidationErrors.Count < 1;
        }

    }

}