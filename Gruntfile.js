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
        
        copy: {
            main: {
                files: [
                  {src: ['./dist/*.css'], dest: './test/site/public/stylesheets/style.css'}, // includes files in path
                  // {expand: true, cwd: './', src: ['./dist/*.css'], dest: './test/site/public/stylesheets/style.css'} // makes all src relative to cwd
                ]
            }
        },

        watch: {
            scripts: {
                files: ['less/*.less'],
                tasks: ['less','copy']
            },
            
        }

    });

    // grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('assemble-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['less', 'copy', 'watch']);

};