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
  var time = moment().format("HH");
  console.log(time);
  for (var i = 8; i < 20; i++) {
    $(".container").append(`<form class="row">

  <div class="input-group flex-nowrap">
    <div class="input-group-text" id="space">
      <tr>${i}</tr>
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


  var inputText = "";
  $(".submitBtn").on("click", function (e) {
    e.preventDefault();
    $(".textInput").val("");
    localStorage.setItem('.textInput', JSON.stringify(inputText));


  });
});