var webpack=require('webpack');
module.exports={
  entry:{
     index:'./js/index.js',
      sex:'./js/sex.js',
      medical:'./js/medical.js',
      allergy:'./js/allergy.js',
      basic:'./js/basic.js',
      fell:'./js/fell.js'
  },
    output:{
        path:'dist/',
        filename:'js/[name].js',
        publicPath:'../dist/'
    },
    module:{
        loaders  :[
            {test: /\.css$/, loader: 'style!css' },//！相当于或
            {test:/\.(png|jpg|gif)$/,loader:'url-loader?name=img/[name].[ext]'},//file-loader相当于js，url-loader相当于jquery;如果图片小于60000kb，就直接用，否则会转化为base64格式;&name：配置图片的加载路径;/img标签；[图片本身的名字].[后缀jpg|png]
            {test:/\.scss$/,loaders:["style","css","sass"]}
        ]
    },
    plugins:[
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",
            "window.jQuery":"jquery"
        })
    ]

};
