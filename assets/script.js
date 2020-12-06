$(document).ready(function () {
  //Displays current date/time at top of page.
  $("#currentDay").text(
    luxon.DateTime.local().toLocaleString({
      weekday: "long",
      month: "long",
      day: "2-digit",
    })
  );

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

  var newRow = $("<div>", { class: "row time-block" });
  var newHour = $("<div>", { class: "col-1 hour" });
  var newTextEl = $("<textarea>", { class: "col-10" });
  var newButton = $("<button>", { class: "col-1 saveBtn" });
  var newIcon = $("<i>", { class: "fa fa-save" });

  for (var i = 0; i < hrsArray.length; i++) {
    $(".container").append(newRow);
    newRow.append(newHour);
    newHour.text(hrsArray[i]);
    newRow.append(newTextEl);
    newRow.append(newButton);
    newButton.append(newIcon);
  }
});
