module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        concat: {
            "options": { "separator": ";" },
            "build": {
                "src": [
                  "node_modules/jquery/dist/jquery.min.js",
                  "node_modules/jquery.cookie/jquery.cookie.js",
                  "node_modules/handlebars/dist/handlebars.min.js",
                  "assets/js/app.js",
                  "assets/js/calls.js",
                  "assets/js/defaults.js",
                  "assets/js/login.js",
                  "assets/js/dashboard.js",
                  "assets/js/stackoverflow.js",
                  "assets/js/intercom.js",
                  "assets/js/main.js",
                  "assets/js/niceadmin/bootstrap.min.js",
                  "assets/js/niceadmin/jquery.nicescroll.js",
                  "assets/js/niceadmin/jquery/scrollTo.min.js",
                  "assets/js/niceadmin/scripts.js",
                ],
                "dest": "public/js/frontend.js"
            }
        },
        concat_css: {
          options: {
            "processImport": false
          },
          all: {
            src: ["assets/css/**/*.css"],
            dest: "public/css/style.min.css"
          },
        }
    });

    // Load required modules
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-concat-css');

    // Task definitions
    grunt.registerTask('default', ['concat', 'concat_css']);
};
