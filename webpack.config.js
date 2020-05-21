const path = require('path');
var webpack = require('webpack');
module.exports={
    name: 'Todolist',
    mode: 'development',
    devtool:'eval',
    resolve: {
        extensions: ['.js','.jsx'],
    },//웹팩이 js,jsx확장자 다 설정해줌

    entry:{
        app: './src/index',

    }, // 입력
    module:{
        rules:[{
            test:/\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets:['@babel/preset-env', '@babel/preset-react'],
                plugins:[
                    '@babel/plugin-proposal-class-properties',
                    'react-hot-loader/babel',
                ],
            },
        }],
    },

    output:{
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
    }, //출력
} //entry찾아서 module적용하고 output에 뺀다