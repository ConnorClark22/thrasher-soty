
// Kader Adidas Part Player
function loadAdidasPlayer(){
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cplayer&id=j9L8U068kRM&key=AIzaSyAXamIVH9DbVEAmXVOnZwcZ_lu61ysg5xk")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const adidas = document.getElementById('adidasApi');
      adidas.innerHTML = data.items[0].player.embedHtml;
    })
    .catch((err) => {
      console.log('Error!', err);
    })
    }; 
    loadAdidasPlayer();
