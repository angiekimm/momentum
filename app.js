// html 가져오는 방법
// const title = document.getElementById("title");

// open up the element
// console.dir(title);
// title.innerText = "Got you!";

// querySelector: returns only first element. not array
// querySelectorAll: returns all elements
const h1 = document.querySelector(".hello h1");
// h1.style.color = "red";
// console.dir(h1);

function handleTitleClick() {
  h1.style.color = "blue";
}
function handleMouseEnter() {
  h1.innerText = "Mouse is here!";
}
function handleMouseLeave() {
  h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
  alert("copier!");
}
function handleWindowOffline() {
  alert("SOS no WIFI");
}
function handleWindowOnline() {
  alert("ALL GOOOOD");
}
// event
// HTML element
h1.addEventListener("click", handleTitleClick);

h1.addEventListener("mouseenter", handleMouseEnter);

h1.addEventListener("mouseleave", handleMouseLeave);

// window
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
