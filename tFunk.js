
// T Funk Baker Part Player
function loadBakerPlayer(){
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cplayer&id=1uyfck1p430&key=AIzaSyDuwQd5h_HvMexLOcKEHFbqMdLLwxpn728")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const baker = document.getElementById('bakerApi');
      baker.innerHTML = data.items[0].player.embedHtml;
    })
    .catch((err) => {
      console.log('Error!', err);
    })
    }; 
    loadBakerPlayer();

