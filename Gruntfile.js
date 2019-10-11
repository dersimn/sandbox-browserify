const pkg = require('./package.json');

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: pkg,

        browserify: {
            dist: {
                src: [],
                dest: 'bundle.js',
                options: {
                    require: Object.keys(pkg.dependencies)
                }
            }
        },

        clean: {
            dist: [
                'node_modules/',
                'package-lock.json'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['browserify']);
};