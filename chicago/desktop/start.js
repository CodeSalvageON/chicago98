const startButton = document.getElementById("start");
const startMenu = document.getElementById("start-bar");

let startFunc = 0;

$("#start-bar").hide();

$("#start").click(function () {
  if (startFunc === 0) {
    $("#start-bar").show();
    startFunc = 1;
  }

  else {
    $("#start-bar").hide();
    startFunc = 0;
  }
});