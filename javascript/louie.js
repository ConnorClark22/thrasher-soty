
// Louie Lopez Honor Roll Player
const honorRoll = document.getElementById('honorRollApi');

const loadHonorRollPlayer = () => {
   fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cplayer&id=Y-A7pqw4Mxg&key=AIzaSyDuwQd5h_HvMexLOcKEHFbqMdLLwxpn728")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        honorRoll.innerHTML = data.items[0].player.embedHtml;
      })
      .catch((err) => {
        console.log('Error!', err);
      })
  };
  
  loadHonorRollPlayer();

  
  
  
  
  //Louie Lopez Again & Again Player
  const again = document.getElementById('againApi');

  const loadAgainPlayer = () => {
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cplayer&id=j3QqchwDr10&key=AIzaSyDuwQd5h_HvMexLOcKEHFbqMdLLwxpn728")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        again.innerHTML = data.items[0].player.embedHtml;
      })
      .catch((err) => {
        console.log('Error!', err);
      })
  };
  
  loadAgainPlayer(); 



