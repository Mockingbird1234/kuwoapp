module.exports = {
  proxy: {
    '/apis': {  //将www.exaple.com印射为/apis
      target: 'https://c.y.qq.com', // 接口域名
      changeOrigin: true, //是否跨域
      pathRewrite: {
        '^/apis': ''  //需要rewrite的,
      }
    },
    /*'/songs': {  //将www.exaple.com印射为/apis
      target: 'http://isure.stream.qqmusic.qq.com', // 接口域名
     // changeOrigin: true, //是否跨域
      pathRewrite: {
        '^/songs': ''  //需要rewrite的,
      }
    },*/
  }
}
