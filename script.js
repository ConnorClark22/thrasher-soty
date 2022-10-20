// LOUIE HONOR ROLL VIDEO PLAYER

$(document).ready(function () {

    var key = 'AIzaSyBMT_BpchluJQbHcUY53n6FqrzymyDZYbE';
    var videoId = 'Y-A7pqw4Mxg';
    var URL = 'https://youtube.googleapis.com/youtube/v3/videos'

    var options = {
        part: 'snippet',
        key: key,
        maxResults: 1,
        id: videoId
    }

    loadVid();

    function loadVid() {
        $.getJSON(URL, options, function (data) {
            console.log(data)
            var id = data.items[0].id
            honorRoll(id);
        })
    }

    function honorRoll(id) {
        $('#honorRoll').html(`
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${id}"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        `);
    }

});






// LOUIE AGAIN & AGAIN VIDEO PLAYER

$(document).ready(function () {

    var key = 'AIzaSyBMT_BpchluJQbHcUY53n6FqrzymyDZYbE';
    var videoId = 'j3QqchwDr10';
    var URL = 'https://youtube.googleapis.com/youtube/v3/videos'

    var options = {
        part: 'snippet',
        key: key,
        maxResults: 1,
        id: videoId
    }

    loadVid();

    function loadVid() {
        $.getJSON(URL, options, function (data) {
            console.log(data)
            var id = data.items[0].id
            again(id);
        })
    }

    function again(id) {
        $('#again').html(`
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}
        " title="YouTube video player" frameborder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
        `);
    }

});







// ISHOD REAL VIDEO PLAYER

$(document).ready(function () {

    var key = 'AIzaSyBMT_BpchluJQbHcUY53n6FqrzymyDZYbE';
    var videoId = '29-o8rogijk';
    var URL = 'https://youtube.googleapis.com/youtube/v3/videos'

    var options = {
        part: 'snippet',
        key: key,
        maxResults: 1,
        id: videoId
    }

    loadVid();

    function loadVid() {
        $.getJSON(URL, options, function (data) {
            console.log(data)
            var id = data.items[0].id
            realVid(id);
        })
    }

    function realVid(id) {
        $('#realVid').html(`
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
        `);
    }

});





// ISHOD BAY VIDEO PLAYER


$(document).ready(function () {

    var key = 'AIzaSyBMT_BpchluJQbHcUY53n6FqrzymyDZYbE';
    var videoId = 'VSOssYcmn_w';
    var URL = 'https://youtube.googleapis.com/youtube/v3/videos'

    var options = {
        part: 'snippet',
        key: key,
        maxResults: 1,
        id: videoId
    }

    loadVid();

    function loadVid() {
        $.getJSON(URL, options, function (data) {
            console.log(data)
            var id = data.items[0].id
            bayVid(id);
        })
    }

    function bayVid(id) {
        $('#bayVid').html(`
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${id}"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        `);
    }

});


