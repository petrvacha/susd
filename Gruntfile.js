module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        concat: {
            "options": { "separator": ";" },
            "build": {
                "src": [
                  "node_modules/jquery/dist/jquery.min.js",
                  "node_modules/handlebars/dist/handlebars.min.js",
                  "assets/js/app.js",
                  "assets/js/calls.js",
                  "assets/js/defaults.js",
                  "assets/js/main.js"
                ],
                "dest": "public/js/frontend.js"
            }
        }
    });

    // Load required modules
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Task definitions
    grunt.registerTask('default', ['concat']);
};
