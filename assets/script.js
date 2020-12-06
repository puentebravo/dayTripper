console.log("It's working!");

$(document).ready(function () {
  //Displays current date/time at top of page.
  $("#currentDay").text(
    luxon.DateTime.local().toLocaleString({
      weekday: "long",
      month: "long",
      day: "2-digit",
    })
  );
});
