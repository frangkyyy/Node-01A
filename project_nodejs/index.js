var http = require('http');
var fileSys = require('fs');
var url = require('url');

//membuat variabel yang diisi http dan memanggil method createServer
//karena kita akan menangkap data url dari browser, maka kita buat sebuah variabel dahulu misal q lalu parsing url
var server = http.createServer((req, res) => {
    let q = url.parse(req.url, true);
    //memisahkan data data dari q menjadi objek dari javascript dengan cara memanggil query
    let path = q.query;
    //kita buat variabel untuk menampung hasil file location berdasarkan kondisi menu dari request browser
    let fileLocation;
    switch (path.menu){
        case '/':
            fileLocation = 'pages/index.html';
            break;
        case 'dsb':
            fileLocation = 'pages/index.html';
            break;
        case 'kk':
            fileLocation = 'pages/kartukeluarga.html';
            break;
        case 'ctz':
            fileLocation = 'pages/penduduk.html';
            break;
        case 'user':
            fileLocation = 'pages/user.html';
            break;
        case 'add_kk':
            fileLocation = 'add_pages/add_kk.html';
            break;
        case 'add_penduduk':
            fileLocation = 'pages/add_penduduk.html';
            break;
        default:
            fileLocation = 'pages/index.html';
    }
    //menggunakan variabel fileSys untuk melakukan pembacaan data dan menempelkannya pada browser
    fileSys.readFile(fileLocation, (err, data) => {
        if(err) {
            res.writeHead(404, {'Content-type': 'text/html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(data);
        return res.end();
    })
})
server.listen(8000);