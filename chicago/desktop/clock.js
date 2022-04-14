const timedate = document.getElementById("timedate");

function getTime (type) {
  switch (type) {
    case 0 :
      let fullDate = new Date();

      return fullDate;

    case 1 :
      let halfDate = new Date(hours, minutes);

      return halfDate;
  }
}

function updateTaskbarTime () {
  timedate.innerText = getTime(1);
}

setInterval(updateTaskbarTime, 500);