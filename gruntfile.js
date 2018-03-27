module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.initConfig({
		  uglify: {
		    my_target: {
		      files: {
		        'output.min.js': ['menu.js']
		      }
		    }
		  }
	});
	grunt.registerTask('default',['uglify']);
};