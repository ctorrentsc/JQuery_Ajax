$(document).ready(function () {
  console.log("Funciona!");

  $("#button").click(function () {
    $.getJSON("http://api.icndb.com/jokes/random", function (result) {
      $.each(result, function (i, value) {
        var currentJoke = value.joke;
        $("#joke").text(currentJoke);
      });
    });
  });

})