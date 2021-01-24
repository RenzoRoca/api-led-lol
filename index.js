const five = require('johnny-five');
const express = require('express');
const cors = require('cors');
const board = new five.Board();

/*
board.on('ready', () => {
    //... aquí se encontrará el código de nuestro servidor en express 

});
let led = new five.Led(13);
*/

const app = express();
app.use(cors());
app.get('/', (req, res) => res.send('Ready!'));
app.listen(process.env.PORT, () => console.log('Server on: localhost:8080'));