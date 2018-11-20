 //导入proxy
    var proxy = require('http-proxy-middleware')
    
    //context可以是单个字符串，也可以是多个字符串数组，分别对应你需要代理的api,星号（*）表示匹配当前路径下面的所有api
    const context = [`#/home/*`,`/home/*`]
    
    module.exports = {
        devServer: {
           host: 'localhost',
           port: '3011',
           proxy: [
               {
                    context: context,
                    target: 'https://channel.m.fenqile.com/category/query_sub_page.json?page_id=PRPG201712130015003',
                    changeOrigin: true,
                    secure: false
              }
           ]
        }
    }