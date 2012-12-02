module.exports = function(grunt) {

    grunt.initConfig({

        less: {
            dist: {
                files: {
                    "dist/chrome-bootstrap.css": "src/chrome-bootstrap.less"
                }
            }
        },

        concat: {
            dist: {
                src: ['src/js/intro.js', 'src/js/navigation.js', 'src/js/modal.js', 'src/js/i18n.js', 'src/js/outro.js'],
                dest: 'dist/chrome-bootstrap.js'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', 'less concat');

};