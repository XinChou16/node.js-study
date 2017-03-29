var http = require('http');// 请求HTTP模块并赋给'http'变量
    url = require('url');

http.createServer(function (req, res) {
  var pathname = url.parse(req.url).pathname; //检查请求的路径名

  // 给相应的路径名执行相应的响应
  if (pathname === '/') {
    res.writeHead(200,{
      'content-type': 'text/plain'
    });
    res.end('home page\n');
  }
  else if (pathname === '/about') {
    res.writeHead(200,{
      'content-type': 'text/plain'
    });
    res.end('about us\n');
  }
  else if (pathname === '/redirect') {
    res.writeHead(301,{
      'location': '/'
    });
    res.end();
  }
  // 路径名找不到的话，响应404页面
  else {
    res.writeHead(404,{
      'content-type': 'text/plain'
    });
    res.end('page not found\n');
    })
  }
}).listen(8000,"127.0.0.1");
console.log('server is running.');
