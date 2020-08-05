$(document).ready(function () {
  console.log("Funciona!");

  $("#button").click(function () {
    $.getJSON("http://api.icndb.com/jokes/random", function (data) {
      $.each(data, function (i, value) {
        var currentJoke = value.joke;
        $("#joke").text(currentJoke);
      });
    });
  });

})

