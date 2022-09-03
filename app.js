// const h1 = document.querySelector(".hello h1");
const body = document.body;
console.log(body);
function handleTitleClick() {
  //   const clickedClass = "clicked";
  //   if (h1.classList.contains(clickedClass)) {
  //     h1.classList.remove(clickedClass);
  //   } else {
  //     h1.classList.add(clickedClass);
  //   }
  h1.classList.toggle("clicked");
}
// h1.addEventListener("click", handleTitleClick);
function handleResize() {
  if (window.innerWidth < 600) {
    body.classList.remove("yellow");
    body.classList.remove("purple");
    body.classList.add("blue");
  } else if (window.innerWidth >= 600 & window.innerWidth < 800) {
    body.classList.remove("yellow");
    body.classList.remove("blue");
    body.classList.add("purple");
  } else {
    body.classList.remove("blue");
    body.classList.remove("purple");
    body.classList.add("yellow");
  }
}
window.addEventListener("resize", handleResize);
