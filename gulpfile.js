import gulp from 'gulp';
import concat from 'gulp-concat';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import terser from 'gulp-terser';
import del from 'del';
import browserSync from 'browser-sync';
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import imagemin from 'gulp-imagemin';
import size from 'gulp-size';
import sourcemaps from 'gulp-sourcemaps'
import newer from 'gulp-newer';
import babel from 'gulp-babel'

const sass = gulpSass(dartSass);
//array for files
const cssFiles = [
    './src/scss/css/main.css',
    './src/scss/css/_footer.css',
    './src/scss/css/_header.css'
]
const scssFiles = [
    './src/scss/main.scss',
    './src/scss/_footer.scss',
    './src/scss/_header.scss'
    //space for your scss files
]
const jsFiles = [
    './src/scripts/main.js'
    //space for yours js files
]
const paths = {
    images: {
        src: 'src/img/**',
        dest: 'build/img'
    }
}


//task for styles
function styles() {
    //all files assembly
    return gulp.src(cssFiles)
        .pipe(sourcemaps.init()) //add sourcemap
        //concate files
        .pipe(concat('style.css'))
        //autoprefixer
        .pipe(autoprefixer({
            cascade: false
        }))
        //minify css
        .pipe(cleanCSS({
            level: 2,
            all: false, // sets all values to `false`
            removeDuplicateRules: true
        }))
        //output file
        .pipe(sourcemaps.write('.')) //sourcemap file
        .pipe(size()) // show file size
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.stream());
}

//task convet scss to css 
function convert() {
    return gulp.src(scssFiles)
        .pipe(sass())
        .pipe(gulp.dest('./src/scss/css'));
}

//taks for js scripts
function scripts() {
    return gulp.src(jsFiles)
        .pipe(sourcemaps.init()) //add sourcemap
        .pipe(babel({ //ES6+ to ES5
            presets: ['@babel/env']
        }))
        .pipe(concat('script.js')) //concate files
        .pipe(terser({ //minify js
            toplevel: true
        }))
        .pipe(sourcemaps.write('.')) //sourcemap file
        .pipe(size()) // show file size
        .pipe(gulp.dest('./build/js')) //output file
        .pipe(browserSync.stream());
}

//task delete files from directory
function clean() {
    return del(['dist/*', '!dist/img'])
}

//task watch
function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    //watch css files
    gulp.watch('./src/scss/**/*.scss', gulp.series(convert, styles))
        //watch js files
    gulp.watch('./src/scripts/**/*.js', scripts)
        //start sync when html is changed
    gulp.watch("./*.html").on('change', browserSync.reload);
}

//compress images
function img() {
    return gulp.src(paths.images.src)
        .pipe(newer(paths.images.dest))
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(size()) // show file size
        .pipe(gulp.dest(paths.images.dest))
}


const build = gulp.series(clean, gulp.parallel(styles, scripts, img), watch)

export { clean }
export { img }
export { styles }
export { scripts }
export { watch }
export { convert }
export { build }

gulp.task('default', build); //default task