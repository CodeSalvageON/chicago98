const startButton = document.getElementById("start");
const startMenu = document.getElementById("start-bar");

$("#start-bar").hide();

$("#start").click = function () {
  $("#start-bar").slideUp(1000);
  alert("wtf");
}