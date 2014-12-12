module.exports = function (grunt) {
    grunt.initConfig({

        // define source files and their destinations
        uglify: {
            files: {
                src: ['left/tracker/src/main/extensions/src/common/app/*.js', '!left/tracker/src/main/extensions/src/common/app/forum.js'],  // source files mask
                dest: 'left/tracker/src/main/extensions/src/common/app/',    // destination folder
                expand: true,    // allow dynamic building
                flatten: true,   // remove all unnecessary nesting
                ext: '.js'   // replace .js to .min.js
            }
        },
        htmlmin: {                                     // Task
            dist: {                                      // Target
                options: {                                 // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {                                   // Dictionary of files
                    'left/tracker/src/main/extensions/src/common/options.html': 'left/tracker/src/main/extensions/src/common/options.html',     // 'destination': 'source'
                    'left/tracker/src/main/extensions/src/common/popup.html': 'left/tracker/src/main/extensions/src/common/popup.html'
                }
            }
        },
        cssmin: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'left/tracker/src/main/extensions/src/common/css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'left/tracker/src/main/extensions/src/common/css/',
                    ext: '.css'
                }]
            }
        },
        watch: {
            js:  { files: 'left/tracker/src/main/extensions/src/common/app/*.js', tasks: [ 'uglify' ] },
            html:  { files: 'left/tracker/src/main/extensions/src/common/*.html', tasks: [ 'htmlmin' ] },
            css:  { files: 'left/tracker/src/main/extensions/src/common/css/*.css', tasks: [ 'cssmin' ] }
        }
    });

// load plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

// register at least this one task
    grunt.registerTask('default', [ 'uglify', 'htmlmin', 'cssmin' ]);


};