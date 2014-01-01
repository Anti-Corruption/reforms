module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {
      api: {
        files: [
          {
            expand: true,
            cwd: 'tmp/',
            src: ['**/*json'],
            dest: 'dist/',
            rename: function(dest, src) {
              return dest + src.substring(0, src.lastIndexOf('/')) + "/index.json";
            }
          },
          {
            expand: true,
            cwd: 'public/',
            src: ['.htaccess'],
            dest: 'dist/'
          }
        ]
      }
    },

    clean: {
      dist: ['dist'],
      tmp: ['tmp']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['clean:dist', 'copy']);

}
