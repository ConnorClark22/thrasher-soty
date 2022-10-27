
// TJ Es Part Player
function loadEsPlayer(){
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cplayer&id=DYFIB4w0k2Y&key=AIzaSyAXamIVH9DbVEAmXVOnZwcZ_lu61ysg5xk")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const es = document.getElementById('esApi');
      es.innerHTML = data.items[0].player.embedHtml;
    })
    .catch((err) => {
      console.log('Error!', err);
    })
    }; 
    loadEsPlayer();
