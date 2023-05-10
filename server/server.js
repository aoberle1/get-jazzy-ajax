const express = require('express');

const app = express();
const PORT = 5000;

const artistListArray = require('./modules/artist.js');

const songListArray = require('./modules/song.js');

const albumListArray = require('./modules/album.js')

app.use(express.static('server/public'));

// .get sends a request to the server for data on /artist page
app.get('/artist', (req, res) => {
    // response from server, sending artistListArray back to client
    res.send(artistListArray);
});

app.get('/song', (req, res) => {
    res.send(songListArray)
});

app.get('/album', (req, res) => {
    res.send(albumListArray)
});

// TODO - Add GET for songs

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});