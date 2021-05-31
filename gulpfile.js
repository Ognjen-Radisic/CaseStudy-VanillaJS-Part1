const gulp = require("gulp");

//for production
const webpack = require("webpack");
const webpackProd = require("./webpack.prod.js");

function production(cb) {
	return new Promise((resolve, reject) => {
		webpack(webpackProd, (err, stats) => {
			if (err) {
				return reject(err);
			}
			if (stats.hasErrors()) {
				return reject(new Error(stats.compilation.errors.join("\n")));
			}
			resolve();
		});
	});
}

exports.build = gulp.series(production);
