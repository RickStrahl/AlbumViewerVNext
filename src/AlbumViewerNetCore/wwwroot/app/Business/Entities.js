System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Album, Artist, Track;
    return {
        setters:[],
        execute: function() {
            Album = (function () {
                function Album() {
                    this.Id = 0;
                    this.ArtistId = 0;
                    this.Tracks = [];
                    this.ArtistName = null;
                    this.Artist = null;
                }
                return Album;
            }());
            exports_1("Album", Album);
            Artist = (function () {
                function Artist() {
                    this.Id = 0;
                }
                return Artist;
            }());
            exports_1("Artist", Artist);
            Track = (function () {
                function Track() {
                    this.Id = 0;
                    this.Length = 0;
                }
                return Track;
            }());
            exports_1("Track", Track);
        }
    }
});
//# sourceMappingURL=Entities.js.map