$(document).ready(function () {
  //Displays current date/time at top of page.
  $("#currentDay").text(
    luxon.DateTime.local().toLocaleString({
      weekday: "long",
      month: "long",
      day: "2-digit",
    })
  );

  function timingEl() {
    var hourEl = luxon.DateTime.local().toLocaleString({
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    var formHour = parseInt(hourEl[0] + hourEl[1]);
    console.log(hourEl);
  }

  hrsArray = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  //   var newRow = $("<div>", { class: "row time-block" });
  //   var newHour = $("<div>", { class: "col-1 hour" });
  //   var newTextEl = $("<textarea>", { class: "col-10" });
  //   var newButton = $("<button>", { class: "col-1 saveBtn" });
  //   var newIcon = $("<i>", { class: "fa fa-save" });

  //   for (var i = 0; i < hrsArray.length; i++) {
  //     console.log(hrsArray[i]);
  //     $(".container").append(newRow);
  //     newRow.append(newHour);
  //     newHour.text(hrsArray[i]);
  //     newRow.append(newTextEl);
  //     newTextEl.attr("id", hrsArray[i]);
  //     newRow.append(newButton);
  //     newButton.append(newIcon);
  //   }

  console.log($("textarea").val());

  $(".saveBtn").click(function () {
    var taskTxt = $(this).siblings("textarea").val();
    var taskKey = $(this).siblings(".hour").text();
    localStorage.setItem(taskKey, taskTxt);
  });
});
