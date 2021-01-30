const gulp = require('gulp'), 
    sass = require('gulp-sass'), 
    pug = require('gulp-pug'), 
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    pipeline = require('readable-stream'),
    imagemin = require('gulp-imagemin'),
    browserSync = require('browser-sync'),
    cssnano = require('gulp-cssnano'),
    concat = require('gulp-concat');
gulp.task('hello', async function() {
    console.log("Hi!");
});
gulp.task('browser', function() {
    browserSync({
        server: {
            baseDir: 'dist'
        },
        notify: false
    });
});
gulp.task('pug', function() {
    return gulp.src('src/pug/*.pug',)
        .pipe(pug({
            pretty:true
        }))
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.reload({stream: true}))
});
gulp.task('sass', function() {
    return gulp.src(['src/sass/*.+(scss|sass)'])
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(autoprefixer(['last 16 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(concat('styles.css'))
        .pipe(sourcemaps.init())
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({stream: true}))
});
gulp.task('script', function() {
    return pipeline(
        gulp.src('src/js/*.js'),
        concat('scripts.min.js'),
        uglify(),
        gulp.dest('dist/js')
    );
});
gulp.task('images', function() {
	return gulp.src('src/img/*')
		.pipe(imagemin([
            imagemin.mozjpeg({quality: 75, progressive: true}),
            imagemin.optipng({optimizationLevel: 5})
        ], {
            verbose: true
        }))
        .pipe(gulp.dest('dist/img')) // Выгружаем на продакшен
        .pipe(browserSync.reload({stream: true}));
});
gulp.task('clean', async function() {
	return del.sync('dist'); // Удаляем папку dist перед сборкой
});
gulp.task('watch', function() {
	gulp.watch('src/sass/*.s+(c|a)ss', gulp.parallel('sass'));
    gulp.watch('src/pug/*.pug', gulp.parallel('pug'));
});
gulp.task('default', gulp.parallel('sass', 'pug', 'browser', 'images', 'script', 'watch'));