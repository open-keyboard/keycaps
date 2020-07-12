/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2015-11-16 02:18:01
 * @version $Id$
 */

const { watch, src, dest, series } = require('gulp');
var cssnext = require("gulp-cssnext");

function css (cb) {
    return src("dev/*.css")
        .pipe(cssnext({
            compress: true
        }))
        .pipe(dest("./css/"));

}

exports.default = function () {
    // You can use a single task
    watch(['./dev/**'], css);
};
