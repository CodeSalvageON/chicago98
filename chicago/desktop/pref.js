let localBg = localStorage.getItem("win98-bg");
let desktop = document.getElementById("desktop");

if (localBg === null || localBg === undefined || localBg === "") {
  desktop.style.backgroundImage = "url('/chicago/desktop/bgs/suburbia.jpeg')";
}