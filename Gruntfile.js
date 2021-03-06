var path = require('path');

var stylesheetsDir = 'dev/styles/';

module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jade: {
			html: {
				files: {
					'dist/': ['dev/templates/*.jade']
				},
				options: {
					client: false
				}
			}
		},
		connect: {
			server: {
				options: {
					port: 9001,
					base: 'dist/'
				}
			}
		},
		concat: {
			js: {
				options: {
					separator: ';'
				},
				src: [
					'dev/javascript/*.js'
				],
				dest: 'dist/scripts/main.min.js'
			},
		},
		uglify: {
			options: {
				mangle: false
			},
			js: {
				files: {
					'dist/scripts/main.min.js': ['dev/javascript/app.js']
				}
			}
		},
		sass: {                              // Task
			dist: {                            // Target
				options: {                       // Target options
					style: 'compressed'
				},
				files: {                         // Dictionary of files
					'dist/css/main.css': stylesheetsDir + 'main.scss'      // 'destination': 'source'
				}
			}
		},
		autoprefixer: {
			options: {
				browsers: ['last 5 version', 'ie 7', 'ie 8', 'ie 9']
			},
			no_dest: {
				src: 'dist/css/main.css'
			}
		},
		uncss: {
			dist: {
				files: {
					'dist/css/main.css' : ['dist/index.html']
				}
			}
			// Add classes and id's that you want to ignore here.
			// options: {
			// 	ignore: ['#loading-bar*']
			// }
		},
		watch: {
			grunt: {files: ['*.html'],
				options: {
				livereload:true,
			    }  
		    },
			js: {
				files: ['dev/javascript/*.js'],
				tasks: ['concat:js', 'uglify:js'],
				options: {
					livereload: true
				}
			},
			css: {
				files: ['dev/**/*.scss'],
				tasks: ['sass', 'autoprefixer'],
				options: {
					livereload: true
				}
			},
			jade: {
				files: ['dev/templates/*.jade', 'dev/templates/includes/*.jade'],
				tasks: ['jade'],
				options: {
					livereload: true,
					port: 35729,
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-bowercopy');
	grunt.loadNpmTasks('grunt-jade');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-uncss');
	// Run the server and watch for file changes
	grunt.registerTask('default', ['jade', 'connect',  'concat', 'uglify', 'sass', 'autoprefixer', 'watch']); // Build Tasks
	grunt.registerTask('clean', ['uncss']); // Deploy build tasks
};