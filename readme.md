#Strongarm

Your favourite new development framework for launching an app in minutes.

Featuring:

* Jade [http://jade-lang.com/](http://jade-lang.com/)
* SCSS [http://sass-lang.com/](http://sass-lang.com/)
* Grunt [http://gruntjs.com/](http://gruntjs.com/)
* Semantic GS [http://semantic.gs/](http://semantic.gs/)
* CLRS [http://clrs.cc/](http://clrs.cc/)

##How to use this

* Clone the repo on your computer.
* Install [NodeJS](http://nodejs.org/), [Grunt](http://gruntjs.com/getting-started) on your computer. This is will change your life
* Using the command line, navigate to the project folder. 
* Run `NPM install` to install all required Grunt plugins

### Dev VS Dist
There are two folders in the directory, **dev** and **dist**. You do all your work in the dev folder with SCSS, Jade and JS, and Grunt will compile to the dist folder. When you're ready to deploy your site, use the contents of your dist folder.

	- dev
		- javascript
			- app.js
		- styles
			- _colours.scss
			- _functions.scss
			- _grid.scss
			- _mixins.scss
			- main.scss
		- templates
			- includes
				- header.jade
			- index.jade
	- dist
		- css
			- fonts
			- main.css
			- reset.css
		- scripts
			- vendor
				- jquery
					- jquery.min.js
				- modernizr
					- modernizr.js
			- main.min.js
		- index.html
	- Gruntfile.js
	- bower.json
	- package.json
	- readme.md

### Semantic GS
So grid systems rule. They help us maintain structure and flow throughout our site. The problem is that sometimes they require us to add extra classes to our code. Enter Semantic GS.

Semantic GS is preloaded with Strongarm and you should fall in love with it.

Instead of using presentational classes in your html, all grid structure is defined in your SCSS.

Seriously, read about it - [http://semantic.gs/](http://semantic.gs/)


##Using the Grunt tasks

By default, Grunt will render your jade files to HTML, create a local server (defaulting to localhost:9001), concat your javascript files together, use uglify to minify and check for errors in your javascript, convert your SCSS to css, autoprefix any CSS values that need vendor prefixes.

So basically, you work within the dev folder and the output will be put out through the dist folder.

The dev folder contains jade files for your outputted html, javascript, and scss for your styling.

#Coming soon
There is still a lot more documentation to write, but if you get stuck, tweet me at [@drewisthe](http://twitter.com/drewisthe) or pull request that shizz.




