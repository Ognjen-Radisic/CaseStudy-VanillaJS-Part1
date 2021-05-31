const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "./src/template.html",
		}),
	],
	module: {
		rules: [
			{
				test: /\.(gif|svg|png|jpe?g)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "assets/",
						},
					},
				],
			},
			{
				test: /\.html$/,
				use: ["html-loader"],
			},
		],
	},
};
