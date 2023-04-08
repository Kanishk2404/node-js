// file system
/*
const fileSystem = require("fs");
fileSystem.rmdir("noddyy", function(err,result){
    if (err){
    console.log(err);
    }
});

// to remove file we use unlink and to add file we use writefile
// mkdir to add file and rmdir to remove file



const operatingSytem = require("os");
console.log(operatingSytem.arch());
*/

const http = require("http");
http.createServer((request,respond) => {

    if(request.url === "/"){
        respond.end("Hello noddy!!");
    }

    else{
        respond.end("not root");
    }

}).listen(3000);

// API allows 2 application to talk to each other