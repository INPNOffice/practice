const { resolve } = require('path');

const serve = require('webpack-serve');
const config = require('./webpack.config.js');
const argv = {}
const options = { config, content: resolve(__dirname, 'dist'), open: true, port: 8080 }

serve(argv, options);