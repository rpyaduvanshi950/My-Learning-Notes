const http = require('http');
const fs = require('fs');
const fileContent = fs.readFileSync("default.html")

const server  = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type': 'text/html'})
    res.end(fileContent)
})

server.listen(80, '127.0.1.1', ()=>{
    console.log('server listening')
})