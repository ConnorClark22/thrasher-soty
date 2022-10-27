
//Wade Define Part Player
function loadDefinePlayer(){
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cplayer&id=yosOpE87Sho&key=AIzaSyAXamIVH9DbVEAmXVOnZwcZ_lu61ysg5xk")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const define = document.getElementById('defineApi');
      define.innerHTML = data.items[0].player.embedHtml;
    })
    .catch((err) => {
      console.log('Error!', err);
    })
    }; 
    loadDefinePlayer();
