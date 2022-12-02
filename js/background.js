const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const background = document.querySelector(".background");
background.style.backgroundImage = `url("./img/${chosenImage}")`;

// const bgimage = document.createElement("img");

// bgimage.src = `img/${chosenImage}`;

// document.body.appendChild(bgimage);