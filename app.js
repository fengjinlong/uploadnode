var http = require("http")
var querystring = require("querystring")
var formidable = require("formidable")
var path = require("path")
var fs = require("fs")
var sd = require('silly-datetime')

var server = http.createServer(function (req, res) {
  if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
    // parse a file upload 
    var form = new formidable.IncomingForm();
    form.uploadDir = "./uploads"
    form.parse(req, function(err, fields, files) {
      if(err){
        console.log(err)

      }
      // var ttt = sd.format(new Date(), 'YYYYMMDDHHmm')
      // var ran = parseInt(Math.random() * 89999 + 10000)
      // var extname = path.extname(files.pic.name)
      // var oldpath = __dirname + '/' + files.pic.path;
      // var newpath = __dirname + '/uploads/' + ttt + ran + extname;
      // fs.rename(oldpath, newpath, function (err) {
      //   if (err) {
      //     throw Error('error')
      //   }
      //   res.writeHead(200, {'content-type': 'text/plain;charset=utf8'});
      //   console.log(fields)
      //   console.log(files)
      //   res.end("成功")
      // })
      
      res.writeHead(200, {'content-type': 'text/plain;charset=utf8'});
        console.log(fields)
        console.log(files)
        res.end("成功")
      // res.write('received upload:\n\n');
      // res.end(util.inspect({fields: fields, files: files}));
      
    });
    return;
  }
})

server.listen(80, "127.0.0.1")