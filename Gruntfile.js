module.exports = function(grunt) {
  var globalConfig = {
    apiVersion: 'b1'
  };

  grunt.initConfig({
    globalConfig: globalConfig,
    pkg: grunt.file.readJSON('package.json'),

    yaml: {
      api: {
        options: {
          space: 2,
        },
        files: {
          'tmp/json/reforms.json': ['reforms.yml']
        }
      }
    },

    sass: {
      options: {
        includePaths: ['vendor/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'tmp/result/css/app.css': 'scss/app.scss'
        }
      }
    },

    copy: {
      assemble: {
        files: [
          { expand: true, src: ['vendor/**'], dest: 'tmp/result'},
          {
            expand: true,
            dot: true,
            cwd: 'public/',
            src: ['**/*'],
            dest: 'tmp/result'
          },
          {
            expand: true,
            cwd: 'tmp/static',
            src: ['**/*json'],
            dest: 'tmp/result/us/<%= globalConfig.apiVersion  %>/',
            rename: function(dest, src) {
              return dest + src.substring(0, src.lastIndexOf('/')) + "/index.json";
            }
          }
        ]
      },
      dist: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: 'tmp/result/',
            src: ['**/*'],
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
  grunt.loadNpmTasks('grunt-yaml');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['clean', 'prepare']);
  grunt.registerTask('prepare', ['clean:tmp', 'yaml', 'sass']);
  grunt.registerTask('dist', ['clean:dist', 'copy:assemble', 'copy:dist']);

}
