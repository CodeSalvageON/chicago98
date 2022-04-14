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
  }, 100);

  setTimeout(function () {
    clearInterval(bootInterval);
    windowLoader.style.backgroundColor = "black";
  }, 1500);
}

waitForElement("window-loader", function () {
  bootUpLights();
});