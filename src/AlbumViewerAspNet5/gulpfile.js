/// <binding Clean='clean' />

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    fs = require("fs"),
    browserSync = require("browser-sync").create();

eval("var project = " + fs.readFileSync("./project.json"));

var paths = {
  bower: "./bower_components/",
  lib: "./wwwroot/lib/"
};

gulp.task("clean", function (cb) {
  rimraf(paths.lib, cb);
});


gulp.task("copy", ["clean"], function () {
  var bower = {
    "bootstrap": "bootstrap/dist/**/*.{js,map,css,ttf,svg,woff,eot}",       
    "jquery": "jquery/jquery*.{js,map}"  
  }

  for (var destinationDir in bower) {
    gulp.src(paths.bower + bower[destinationDir])
      .pipe(gulp.dest(paths.lib + destinationDir));
  }
});

gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });    
    gulp.watch("app/**/*.html,app/**/*.js,./**/css").on('change', browserSync.reload);
});

//gulp.task("watch", function() {
//    gulp.watch("./src/**/*.js,./src/**/*.html,./src/**/*.css", [
        
//    ]);
//});
