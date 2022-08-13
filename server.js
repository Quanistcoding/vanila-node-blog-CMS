const http = require('http');
const fs = require('fs');
const port = 8000;

const server = http.createServer((req,res)=>{
    console.log(req.url);

    if(req.url === "/"){
        fs.readFile("index.html",(err,data)=>{
            if(err)console.log(err);
            res.writeHead(200,'Content-Type','text/html');
            res.write(data);
            res.end();
        })
    }

    if(/^\/static/.test(req.url)){
        fs.readFile("."+req.url,(err,data)=>{
            if(err)console.log(err);
            res.write(data);
            res.end();
        })
    }else if(/^\/pages/.test(req.url)){
        if(req.url == "/pages//"){
            fs.readFile("./pages/home.html",(err,data)=>{
                if(err)console.log(err);
                res.write(data);
                res.end();
            });
        }else{
        fs.readFile("."+req.url + ".html",(err,data)=>{
            if(err)console.log(err);
            res.write(data);
            res.end();
        });
     };
    }else{
        fs.readFile("index.html",(err,data)=>{
            if(err)console.log(err);
            res.writeHead(200,'Content-Type','text/html');
            res.write(data);
            res.end();
        })
    }
    


}).listen(port)

console.log("listerning on " + port);
