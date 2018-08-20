"use strict";

const debug = process.env.NODE_ENV !== "production";

const webpack = require('webpack');
const path = require('path');

module.exports = {
 
 // the entry file for the bundle
  entry: path.join(__dirname, '/client/src/app.jsx'),

  // the bundle file we will get in the result
  output: {
    path: path.join(__dirname, '/client/dist/js'),
    filename: 'app.js',
  },
 module: {
  rules: [
    {
      test: /\.jsx?$/,
	  //test: /\.js$/,
     include: path.join(__dirname, '/client/src'),
	// include: path.join(__dirname, '/client/dist'),
	exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
		//exclude:/node_modules/,
       // options: {
         // presets: ['env']
       // },
		query: {
        presets: [
    ["es2015", { "modules": false }],
    "react","stage-2"
   // "airbnb"
  ],
        "plugins": ["transform-object-rest-spread"]
         
            // for error ...state
            
            /*  
            Object spread is on staging 3 currently and not included in Babel presets 'es2015'.

            To enable object spread you'll need the plugin

                {
                  "presets": ["es2015"],
                  "plugins": ["transform-object-rest-spread"]
                }
                */
      }
      }
    },
	
         {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit:100000
            }
          }
        ]
      },
      {
  test: /\.(jpg|png|svg)$/,
  loader: 'file-loader',
  options: {
    name: '[path][name].[hash].[ext]',
  },
},
       
	  {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
          
          
          
          
          
      },
      
      { 
      test: /\.styl$/, 
      include: path.join(__dirname, 'client'),
      loader: 'style-loader!css-loader!stylus-loader'
    },
	  {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        },
		
  ]
},
  plugins: debug ? [] : [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    }),
  ]
};
