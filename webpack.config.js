const path = require('path')
const HTML = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: {
		bundle: path.resolve(__dirname, 'src', 'index.js'),
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name][contenthash].js',
		clean: true,
		assetModuleFilename: '[name][ext]',
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'build'),
		},
		port: 3000,
		hot: true,
		compress: true,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
			{
				test: /\.(gif|png|jpg|jpeg|svg)$/,
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		new HTML({
			title: 'Webpack React App',
			filename: 'index.html',
			template: 'src/template.html',
		}),
	],
}
