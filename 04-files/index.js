var fs =  require('fs')
var http =  require('http');

fs.appendFile('macreation.txt', 'Hello Content   ', function(err){
    if (err) throw err ;
    console.log('Saved');
});

fs.appendFile('macreation.txt', '  This is an update !', function(err){
    if (err) throw err;
    console.log('file Update !')
});

// fs.unlink('macreation.txt', function(err){
//     if (err) throw err;
//     console.log("File Delete")
// })


http.createServer(function (req, res) {
    fs.readFile('index.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);