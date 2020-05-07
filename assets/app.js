// Current day is shown on the screen above schedule

var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
document.getElementById("demo").innerHTML = "Today is " + day;

$(document).ready(function () {
  console.log("Hello world");
  var currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");
  $("#currentDate").text(currentDate);
  var time = moment().format("HH");

  $(".submitBtn").on("click", function (e) {
    e.preventDefault();
    userText = $(".textInput").val();

    localStorage.setItem(
      "data",
      JSON.stringify({
        task: userText,
      })
    );
    console.log(JSON.parse(localStorage.getItem("data")).task);
  });

  function render6Data() {
    var item = JSON.parse(localStorage.getItem("data6"));
    if (item != null) {
      $("#textInput6").val(item.task);
    }
  }

  var AM_PM_Variable = "";
  var date_var = new Date();
  var curr_hour = date_var.getHours();

  if (curr_hour < 12) {
    AM_PM_Variable = "AM";
  } else {
    AM_PM_Variable = "PM";
  }
  if (curr_hour == 0) {
    curr_hour = 12;
  }
  if (curr_hour > 12) {
    curr_hour = curr_hour - 12;
  }
  var curr_min = date_var.getMinutes();
  $(".container").append(curr_hour + ":" + curr_min + "" + AM_PM_Variable);

  for (var i = 8; i < 20; i++) {
    $(".container").append(`<form class="row">
  <div class="input-group flex-nowrap">
    <div class="input-group-text" id="space">
      <tr>${i + AM_PM_Variable} </tr>
    </div>
    <input type="text" id="${i}"  class="form-control textInput" placeholder="Add an event to here">
    <div class="input-group-prepend">
      <button type="submit" class="form-control submitBtn"><i class="far fa-calendar"></i></button>
    </div>
  </div>
</form>`);

    if (i < time) {
      $(`#${i}`).attr("style", "background-color:  #d3d3d3; color: white;");
    } else if (i > time) {
      $(`#${i}`).attr("style", "background-color:  green; color: white;");
    } else {
      $(`#${i}`).attr("style", "background-color:  red; color: white;");
    }
  }
});
