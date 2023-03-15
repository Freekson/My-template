# Build Gulp

## Style and script directory structure:
>./src/scss/\*\*/\*.scss  
>./src/scss/css/\*\*/\*.css   
>./src/scripts/\*\*/\*.js  
>./src/img/\*\*/\*.png/.jpg/.jpeg  

## Instruction
1. Download files to any directory  
2. Enter the command in the terminal: npm i (node.js must be installed)  
3. Run the gulp command  
4. Write your own code  

## Additional tasks
gulp clean - removes the dist directory  
gulp styles - convert SCSS to CSS, minify it and combine it into one file (main.min.css)  
gulp scripts - convert JS to ES5 standard, minify and merge into one file (main.min.js)  
gulp img - reduce image size  
gulp watch - run styles and scripts automatically when they change  
gulp build - is a default task  

## Installed NPM packages
[gulp](https://www.npmjs.com/package/gulp) - Gulp builder  
[gulp-scss](https://www.npmjs.com/package/gulp-scss) - Compiling SCSS files to CSS  
[gulp-babel](https://www.npmjs.com/package/gulp-babel) - Compiling new JS standards to older ones  
[gulp-concat](https://www.npmjs.com/package/gulp-concat) - Combining multiple files into one  
[gulp-terser](https://www.npmjs.com/package/gulp-terser) - JS code compression and optimization  
[gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) - minification and optimization of CSS files
[del](https://www.npmjs.com/package/del) - Removing directories and files  
[gulp-sourcemaps](https://www.npmjs.com/search?q=gulp-sourcemaps) - Creates sourcemaos  
[gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) - Adds prefixes to CSS properties  
[gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) - Reduces the size of images  
[gulp-size](https://www.npmjs.com/package/gulp-size) - Displays the size of files  
[browser-sync](https://www.npmjs.com/package/browser-sync) - Browser auto refresh  
[gulp-newer](https://www.npmjs.com/package/gulp-newer) - Plugin to only transfer source files that are newer than the corresponding destination files.