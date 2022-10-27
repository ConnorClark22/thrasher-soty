
// Jake Anderson "Stop" Part Player
function loadStopPlayer(){
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cplayer&id=M-aau_9AcaU&key=AIzaSyAXamIVH9DbVEAmXVOnZwcZ_lu61ysg5xk")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const stop = document.getElementById('stopApi');
      stop.innerHTML = data.items[0].player.embedHtml;
    })
    .catch((err) => {
      console.log('Error!', err);
    })
    }; 
    loadStopPlayer();
