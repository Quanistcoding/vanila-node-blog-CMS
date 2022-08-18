const http = require('http');
const fs = require('fs');
const cp = require('cookie-parser');
const port = 8000;

const users = [
    {email:"asd@asd",password:"1234"}
];

let isUser = false;

const server = http.createServer((req,res)=>{
    
    let auth = cp.cookie_parser(req.rawHeaders[req.rawHeaders.length-1]);

    let isUserIndexEmail = users.findIndex(x=>x.email == auth.email);
    let isUserIndexPwd = users.findIndex(x=>x.password == auth.password);
    isUser = (isUserIndexEmail != -1 && isUserIndexPwd != -1) ?true:false;

let cookieForLoggedin = isUser ? "isLoggedin=true":"isLoggedin=false";


    if(req.url === "/"){
        fs.readFile("index.html",(err,data)=>{
            if(err)console.log(err);
            res.writeHead(200,{'Set-Cookie': cookieForLoggedin, 'Content-Type': 'text/html'});
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
        if(!isUser){
            fs.readFile("./pages/login.html",(err,data)=>{
                if(err)console.log(err);
                res.write(data);
                res.end();
            });    
        }else{
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
     }};
    }else{
        fs.readFile("index.html",(err,data)=>{
            if(err)console.log(err);
            res.write(data);
            res.end();
        })
    }
    


}).listen(port)

console.log("listerning on " + port);
