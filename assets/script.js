$(document).ready(function () {
  //Displays current date/time at top of page.

  $("#currentDay").text(
    luxon.DateTime.local().toLocaleString({
      weekday: "long",
      month: "long",
      day: "2-digit",
    })
  );

  //Grabs stored data for each row

  function getSched() {
    $(".hour").each(function () {
      var hHour = $(this).text();
      var storedText = localStorage.getItem(hHour);

      if (storedText !== null) {
        $(this).siblings("textarea").val(storedText);
      }
    });
  }

  //Sets background color for each time block by comparing it with local time

  function timingEl() {
    var hourEl = luxon.DateTime.local().toLocaleString({
      hour: "2-digit",
      hour12: false,
    });

    $(".hour").each(function () {
      var rowTime = parseInt($(this).text());

      if (rowTime < hourEl) {
        $(this).siblings("textarea").addClass("past");
      } else if (rowTime == hourEl) {
        $(this).siblings("textarea").removeClass("past");
        $(this).siblings("textarea").addClass("present");
      } else {
        $(this).siblings("textarea").removeClass("past");
        $(this).siblings("textarea").removeClass("present");
        $(this).siblings("textarea").addClass("future");
      }
    });
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

  // Renders Rows

  for (var i = 0; i < hrsArray.length; i++) {
    var newRow = $("<div>", { class: "row time-block" });
    var newHour = $("<div>", { class: "col-1 hour" });
    var newTextEl = $("<textarea>", { class: "col-10" });
    var newButton = $("<button>", { class: "col-1 saveBtn" });
    var newIcon = $("<i>", { class: "fa fa-save" });
    $(".container").append(newRow);
    newRow.append(newHour);
    newHour.text(hrsArray[i]);
    newRow.append(newTextEl);
    newRow.append(newButton);
    newButton.append(newIcon);
  }

  $(".saveBtn").click(function () {
    var taskTxt = $(this).siblings("textarea").val();
    var taskKey = $(this).siblings(".hour").text();
    localStorage.setItem(taskKey, taskTxt);
  });
  timingEl();
  getSched();
});
