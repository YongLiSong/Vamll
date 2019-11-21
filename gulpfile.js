const { src, dest, series, parallel, watch } = require('gulp');  //引入gulp默认模块
const clean = require('gulp-clean');    //引入clean模块                    
const fileinclude = require('gulp-file-include') //引入html拼接模块;
const sass = require('gulp-sass');
const webserver = require('gulp-webserver')

function cleanTask() {  //设置清理dist文件的处理模块任务
    return src('./dist', { allowEmpty: true }) //要清理的文件夹路径,允许该文件不存在;
        .pipe(clean()) //执行清理功能;
}

function htmlTask() {   //设置html拼接的功能任务,
    return src('./src/views/**') //允许使用公共片段的文件路径
        .pipe(fileinclude({
            prefix: '@', //拼接的前缀
            basepath: './src/views/templates' //片段的路径
        }))
        .pipe(dest('./dist/views')) //拼接完成后输出的路径
}

function cssTask() { //设置sass转化为css的任务
    return src('src/css/all.scss') //其他css模块,都已经引入到all.css文件内,所以只针对all.css进行转化即可
        .pipe(sass())
        .pipe(dest('./dist/css')) //转化后输出到dist/css文件夹内;
}

function jsTask() { //设置JS相关任务,这个项目不需要将ES6转化为ES5所以,我们直接将,JS下的所有文件,输出到dist/js目录下即可
    return src('src/js/**')
        .pipe(dest('./dist/js'))
}

function staticTask() { //设置静态资源相关任务,开发时不需要将图片压缩,所以我们直接将图片输出到目标文件下即可;
    return src('src/static/**')
        .pipe(dest('./dist/static'))
}

function libTask() { //设置第三方插件的相关任务,将第三方插件输入到,目标文件夹下
    return src('./src/lib/**')
        .pipe(dest('./dist/lib'))
}

function mockTask() { //设置假数据的相关任务,将自制JSON数据,输出到目标文件夹
    return src('./src/mock/**')
        .pipe(dest('./dist/mock'))
}

function serverTask() {
    return src('./src/server/**')
        .pipe(dest('./dist/server'))
}

function watchTask() { //设置监听任务,当被监听的文件发生改变时,就执行该文件的相关任务,保证gulp的输出文件为实时的
    watch('./src/server/**', serverTask)
    watch('./src/mock/**', mockTask)
    watch('./src/lib/**', libTask)
    watch('./src/static/**', staticTask)
    watch('./src/js/**', jsTask)
    watch('./src/css/**', cssTask)
    watch('./src/views/**', htmlTask)
}

function webTask() {
    return src('./dist') //目标文件;
        .pipe(webserver({ //开启web服务功能
            host: 'localhost', //域名
            port: 3000,         //端口号
            open: './views/index.html', //开启的页面路径
            livereload: true   //实时刷新功能
        }))
}

module.exports = {
    dev : series(cleanTask, parallel(htmlTask, cssTask, jsTask, staticTask, libTask, mockTask, serverTask), parallel(watchTask, webTask))
}