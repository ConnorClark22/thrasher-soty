// Ishod Real Part Player
function loadRealPlayer(){
fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cplayer&id=29-o8rogijk&key=AIzaSyDuwQd5h_HvMexLOcKEHFbqMdLLwxpn728")
.then((res) => {
  return res.json();
})
.then((data) => {
  const real = document.getElementById('realApi');
  real.innerHTML = data.items[0].player.embedHtml;
})
.catch((err) => {
  console.log('Error!', err);
})
};
loadRealPlayer();



// Ishod Bay Part Player
function loadBayPlayer(){
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cplayer&id=VSOssYcmn_w&key=AIzaSyDuwQd5h_HvMexLOcKEHFbqMdLLwxpn728")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const bay = document.getElementById('bayApi');
      bay.innerHTML = data.items[0].player.embedHtml;
    })
    .catch((err) => {
      console.log('Error!', err);
    })
    };
    loadBayPlayer();
    