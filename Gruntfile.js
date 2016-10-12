module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks
  require('time-grunt')(grunt);
  grunt.initConfig({
    //load 'package.json'file 
    pkg: grunt.file.readJSON('package.json'),
    meta: {
        version: '0.1.0',
        banner: '/*! PROJECT_NAME - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '* author <%= pkg.author %>\n' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
            'Licensed MIT */'
    },
    jshint: {
      all: ['src/smallSelector.js']
    },
    uglify: {
      all: {
        files: {
          'build/smallSelector.min.js': ['src/smallSelector.js']
        }
      }
    }
    
  });

  grunt.registerTask('build:server',[
    'wiredep',
    'copy:develop',
    'sass',
    'autoprefixer',
    'jshint:serve'
  ]);

}