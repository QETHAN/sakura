module.exports = function(grunt) {

    grunt.initConfig({

        less: {
            options: {
                paths: 'less',
                imports: {
                    less: ['mixins.less', 'vars.less']
                },
                compress: false
            },
            components: {
                files: [
                {
                    expand: true,
                    cwd: 'less/',
                    src: '*.less',
                    dest: 'build/',
                    ext: '.css'
                }
                ]
            },
            compress: {
                options: {
                    compress: true
                },
                files: {
                    "dist/sakura.min.css": "build/sakura.css"
                }
            }
        },

        watch: {
            scripts: {
                files: ['less/*.less'],
                tasks: ['less']
            }
        }
    });

    // grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('assemble-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less', 'watch']);

};