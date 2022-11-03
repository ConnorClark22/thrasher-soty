//Hamburger Menu
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navLinks');
    const navLinks = document.querySelectorAll('.navLinks li');
    //toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
    });
    //animate links
    navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;

    });
}

navSlide();














// Contact Form

// Gets elements
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");
const messageLimit = document.getElementById('message');
const characters = document.getElementById('characters')



//Validate data
const validate = () => {

    clearMessages();
    let errorFlag = false;

    if (nameInput.value.length < 1) {
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if (!emailIsValid(email.value)) {
        errorNodes[1].innerText = "Invalid email address";
        email.classList.add("error-border");
        errorFlag = true;
    }

    if (message.value.length < 1) {
        errorNodes[2].innerText = "Please enter message";
        message.classList.add("error-border");
        errorFlag = true;
    }

    if (!errorFlag) {
        success.innerText = "Thanks " + nameInput.value + ", your message was sent!";
    }
};



// Max Characters / Character Count
messageLimit.addEventListener('keypress', (event) => {
    const text = messageLimit.value;
    if (text.length >= 299) {
        event.preventDefault()
    }
    characters.innerText = 1 + text.length
});




//clear error / success messages
const clearMessages = () => {
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
};

const emailIsValid = email => {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
};





