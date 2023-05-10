$(document).ready(onReady);

function onReady() {
    // hey jQuery, use the AJAX method
    $.ajax({
        // get me the URL localhost:5000/artist
        type: 'GET',
        url: '/artist'
        // after AJAX function, then run function with argument of response we got from the server
    }).then(function (response) {
        // for loop to loop through the indexes in response array
        for (let i = 0; i < response.length; i++) {
            // setting artist equal to the current iteration object in the response array
            let artist = response[i];
            // appending element with ID artistTableBody to have cells with artist properties
            // as data inside cells
            $('#artistTableBody').append(`
                <tr>
                    <td>${artist.name}</td>
                    <td>${artist.born}</td>
                    <td>${artist.died}</td>
                </tr>
            `);
        }
    });

    // TODO Add ajax request for /songs and display on DOM
    $.ajax({
        type: 'GET',
        url: '/song'
    }).then(function (response){
        for (let song of response){
            $('#songTableBody').append(`
            <tr>
                <td>${song.title}</td>
                <td>${song.artist}</td>
            </tr>
            `)
        }
    });

    $.ajax({
        type: 'GET',
        url: '/album'
    }).then(function (response){
        for (let album of response){
            $('#albumTableBody').append(`
            <tr>
                <td>${album.artist}</td>
                <td>${album.title}</td>
                <td>${album.year}</td>
            </tr>
            `)
        }
    });
}