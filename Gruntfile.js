module.exports = function(grunt) {

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      concat: {
          css:{
              src:[
                "assets/vendor/bootstrap/css/bootstrap.min.css",
                "assets/vendor/icofont/icofont.min.css",
                "assets/vendor/boxicons/css/boxicons.min.css",
                "assets/vendor/animate.css/animate.min.css",
                "assets/vendor/owl.carousel/assets/owl.carousel.min.css",
                "assets/vendor/venobox/venobox.css",
                "assets/vendor/aos/aos.css",
                "assets/css/style.css"
              ],
              dest: "dist/app.css"
          },
          js:{
              src: [
                "assets/vendor/jquery/jquery.min.js",
                "assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
                "assets/vendor/jquery.easing/jquery.easing.min.js",
                "assets/vendor/php-email-form/validate.js",
                "assets/vendor/owl.carousel/owl.carousel.min.js",
                "assets/vendor/isotope-layout/isotope.pkgd.min.js",
                "assets/vendor/venobox/venobox.min.js",
                "assets/vendor/aos/aos.js",
                "assets/js/main.js"
              ],
              dest: "dist/app.js"
          }
      },
      cssmin:{
        target:{
            files:{
                'dist/app.min.css':['dist/app.css']
            }
        }
      },
      uglify: {
        target:{
            files:{
                'dist/app.min.js':['dist/app.js']
            }
        }
      },
      copy:{
        main:{
            files:
            [
                { src: ["index.html", "assets/img/**/*.png", "assets/img/**/*.jpg"], dest:"dist/"},
                { cwd: "assets/vendor/icofont/fonts/", src: ["icofont.woff", "icofont.woff2"], dest:"dist/fonts/", expand:true },
                { cwd: "assets/vendor/boxicons/fonts/", src: ["boxicons.woff","boxicons.woff2", "boxicons.ttf"], dest:"dist/fonts/", expand:true},
            ]
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    
    grunt.registerTask('default', ['concat', 'cssmin', 'uglify', 'copy']);
  
  };