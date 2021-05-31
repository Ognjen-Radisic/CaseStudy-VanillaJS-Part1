const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

//module for separating css file from js file in production
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
	mode: "production",
	output: {
		filename: "bundle.[contenthash].js",
		path: path.resolve(__dirname, "dist"),
		clean: true, //clears old dist file
	},
	plugins: [new MiniCSSExtractPlugin({ filename: "[name].[hash].css" })],
	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: [MiniCSSExtractPlugin.loader, "css-loader", "sass-loader"],
			},
			{
				test: /\.js$/i,
				exclude: /(node_modules)/,
				loader: "babel-loader",
			},
		],
	},
});
