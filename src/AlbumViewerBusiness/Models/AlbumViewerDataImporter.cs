using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlbumViewerBusiness
{

    /// <summary>
    /// This class imports Albums, artists and tracks from the
    /// wwwroot/data/albums.js file which contains all the data
    /// in a single graph.
    /// </summary>
    public  class AlbumViewerDataImporter
    {
        public static bool EnsureAlbumData(AlbumViewerContext context, string jsonDataFilePath)
        {
            bool hasData = false;
            try
            {
                hasData = context.Albums.Any();
            }
            catch
            {
                context.Database.EnsureCreated(); // just create the schema as is no migrations
                hasData = context.Albums.Any();
            }


            if (!hasData)
            {
                string json = System.IO.File.ReadAllText(jsonDataFilePath);
                return ImportFromJson(context, json) > 0;
            }


            return true;
        }

        /// <summary>
        /// Imports data from json
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public static int ImportFromJson(AlbumViewerContext context, string json)
        {
            var albums = JsonConvert.DeserializeObject<Album[]>(json);

            foreach (var album in albums)
            {
                // clear out primary/identity keys so insert works
                album.Id = 0;
                album.ArtistId = 0;
                album.Artist.Id = 0;

                var existingArtist = context.Artists.Where(a => a.ArtistName == album.Artist.ArtistName).FirstOrDefault();
                if (existingArtist == null)
                {
                    context.Artists.Add(album.Artist);
                }
                else
                {
                    album.Artist = existingArtist;
                    album.ArtistId = existingArtist.Id;
                }

                if (album.Tracks != null)
                {
                    foreach (var track in album.Tracks)
                    {
                        track.Id = 0;
                        context.Add(track);
                    }
                }
                context.Add(album);

                try
                {
                    context.SaveChanges();
                }
                catch
                {
                    Console.WriteLine("Error adding: " + album.ArtistId);
                }
            }

            var user = new User()
            {
                Username = "test",
                Password = "test",
                Fullname = "Test User",                               
            };
            context.Users.Add(user);
            context.SaveChanges();

            return 1;
        }
    }
}