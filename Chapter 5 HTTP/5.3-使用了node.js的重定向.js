var http = require('http');// 请求HTTP模块并赋给'http'变量
http.createServer(function (req, res) { // 创建新的WEB服务器对象
  //客户发送301代码，提示资源已经转移到另一个位置
  res.writeHead(301,{
    'location':'http://163.com/'
  });
  res.end(); // 将匿名函数传递给咱WEB服务器，收到请求应该发生的事情
}).listen(8000,"127.0.0.1"); //定义WEB服务器的端口和主机
console.log('server is running');// 将访问信息输出到控制台
