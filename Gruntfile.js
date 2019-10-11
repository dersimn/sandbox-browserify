module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        browserify: {
            dist: {
                src: [],
                dest: 'bundle.js',
                options: {
                    require: [
                        'uniq',
                        'jquery',
                        'p-queue',
                        'delay',
                        'mqtt-smarthome-connect'
                    ]
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