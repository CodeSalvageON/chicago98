const timedate = document.getElementById("timedate");

function getTime (type) {
  let fullDate = new Date();
  
  switch (type) {
    case 0 :
      return fullDate;

    case 1 :
      let getWeirdDate = parseInt(fullDate.getHours() / 2);
      let naturalDate = parseInt(fullDate.getHours());

      if (naturalDate > 12) {
        naturalDate = "PM";
      }

      else {
        naturalDate = "AM";
      }

      let addZero = fullDate.getMinutes();

      if (addZero.length < 2) {
        addZero = "0" + String(addZero);
      }
      
      let halfDate = getWeirdDate + ":" + addZero + " " + naturalDate;
      return halfDate;
  }
}

function updateTaskbarTime () {
  timedate.innerText = getTime(1);
}

setInterval(updateTaskbarTime, 500);