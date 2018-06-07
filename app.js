var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);
    if(request.url === '/') {
        fs.readFile('views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        })
    }
    // ====================== CARS ==============================================
    else if(request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }
    //for img1.jpg
    else if(request.url === '/images/1.jpg'){
        fs.readFile('images/1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/2.jpg'){
        fs.readFile('images/2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/3.jpg'){
        fs.readFile('images/3.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/4.jpg'){
        fs.readFile('images/4.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    // ====================== CATS =============================================
    else if (request.url === '/cats') {
        fs.readFile('views/cats.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cat1.jpg'){
        fs.readFile('images/cat1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cat2.jpg'){
        fs.readFile('images/cat2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    // ====================== ADD CAR ======================================
    else if (request.url === '/cars/new') {
        fs.readFile('views/cars_new.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }
    // else if(request.url === '/css/main.css'){
    //     fs.readFile('./css/main.css', 'utf8', function(errors, contents){
    //         response.writeHead(200, {'Content-type': 'text/css'});
    //         response.write(contents);
    //         response.end();
    //     })
    // } else if(request.url === '/images/img.jpg'){
    //     fs.readFile('./images/img.jpg', function(errors, contents){
    //         response.writeHead(200, {'Content-type': 'image/jpg'});
    //         response.write(contents);
    //         response.end();
    //     })
    // }
    else {
        response.writeHead(404);
        response.end('the URL requested is not available :(');
    }
});
server.listen(7077);
console.log("Running in localhost at port 7077");
