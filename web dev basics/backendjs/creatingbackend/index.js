const http = require('http')
const fs = require('fs')

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('./creatingbackend/index.html')
const about = fs.readFileSync('./creatingbackend/about.html')
const services = fs.readFileSync('./creatingbackend/services.html')
const contact = fs.readFileSync('./creatingbackend/contact.html')
const server = http.createServer((req, res)=>{
    console.log(req.url);
    url = req.url;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url == '/'){
        res.end(home);
    }
    else if(url == '/about.html'){
        res.end(about);
    }
    else if(url == '/services.html'){
        res.end(services);
    }
    else if(url == '/contact.html'){
        res.end(contact);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });