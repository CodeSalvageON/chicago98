const windowLoader = document.getElementById("window-loader");

function bootUpLights () {
  let bootColor = "black";
  let bootInterval = setInterval(function () {
    if (bootColor === "black") {
      windowLoader.style.backgroundColor = "white";
      bootColor = "white";
    } 

    else {
      windowLoader.style.backgroundColor = "black";
      bootColor = "black";
    }
  }, 200);

  setTimeout(function () {
    clearInterval(bootInterval);
    windowLoader.style.backgroundColor = "black";

    $("#loading-screen").fadeIn(5000);

    setTimeout(function () {
      waitForElement("desktop", function () {
        $("#loading-screen").fadeOut(5000);

        setTimeout(function () {
          $("#desktop").fadeIn(5000);
        }, 5000);
      });
    }, 5000);
  }, 1500);
}

function bootUpDesktop () {
  
}

waitForElement("loading-screen", function () {
  bootUpLights();
});