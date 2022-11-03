// Contest Countdown
let timer = () => {
let contestDate = new Date("Dec 5, 2022 12:00:00").getTime();
let time = setInterval(function() {
    let today = new Date().getTime();
    let timeLeft = contestDate - today;
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("countdown").innerHTML = days + "days " + hours + "hours " + minutes + "minutes ";
})
};

timer();
