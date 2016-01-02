module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'expanded',
          sourcemap: 'auto',
          cacheLocation: 'sass/.sass-cache'
        },
        files: {
          'assets/css/boostrap.css': 'assets/sass/boostrap.scss'
        },
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'assets/css',
          src: ['*.css', '!*.min.css'],
          dest: 'assets/css',
          ext: '.min.css'
        }]
      }
    },
    watch: {
      css: {
        files: 'assets/sass/**/*.scss',
        tasks: ['sass', 'cssmin']
      }
    }
  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Tasks.
  grunt.registerTask('default', ['sass', 'cssmin', 'watch']);
  grunt.registerTask('build', ['sass', 'cssmin']);
  grunt.registerTask('watcher', ['watch']);

};