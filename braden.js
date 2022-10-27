
// Braden Emerge Part Player
function loadEmergePlayer(){
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cplayer&id=oDunzfTeeFY&key=AIzaSyDuwQd5h_HvMexLOcKEHFbqMdLLwxpn728")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const emerge = document.getElementById('emergeApi');
      emerge.innerHTML = data.items[0].player.embedHtml;
    })
    .catch((err) => {
      console.log('Error!', err);
    })
    }; 
    loadEmergePlayer();





    
// Braden Vaccine Part Player
function loadVaccinePlayer(){
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cplayer&id=RoPERS_U-uA&key=AIzaSyDuwQd5h_HvMexLOcKEHFbqMdLLwxpn728")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const vaccine = document.getElementById('vaccineApi');
      vaccine.innerHTML = data.items[0].player.embedHtml;
    })
    .catch((err) => {
      console.log('Error!', err);
    })
    };
    loadVaccinePlayer();
