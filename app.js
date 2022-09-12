const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server);

var fs = require('fs');
app.use(express.static(__dirname + '/'));

const {SerialPort} = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline')

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

const port = new SerialPort({ path: '/dev/cu.usbmodem142201', baudRate: 115200 })

const parser = new ReadlineParser();

port.pipe(parser);

parser.on('data', function(data){
  console.log("Received Back" + data);
  io.emit('data', data);
});

//port.on('readable', function () {
 // console.log('Data:', port.read())
//})

//port.on('data', function (data) {
  //console.log('2ndData:', data)
//})

io.on('connection', (socket) => {
    console.log('a user connected');
  });

io.on('connection', function(socket) {
    console.log("IO Started");
    
    socket.on('command',function(data){
        
        console.log( data );
        
        port.write( data.status );
        
    
    });
    
});

server.listen(3000);