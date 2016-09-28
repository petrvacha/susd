module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        concat: {
            "options": { "separator": ";" },
            "build": {
                "src": [
                  "node_modules/jquery/dist/jquery.min.js",
                  "node_modules/handlebars/dist/handlebars.min.js",
                  "public/js/app.js",
                  "public/js/calls.js",
                  "public/js/defaults.js",
                  "public/js/main.js"
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
