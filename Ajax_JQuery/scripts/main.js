$(document).ready(function () {
  console.log("Funciona!");

  /*  Funció getJSON()
  
  $("#button").click(function () {
      $.getJSON("http://api.icndb.com/jokes/random", function (data) {
        $.each(data, function (index, value) {
          var currentJoke = value.joke; //Joke és el nom de la propietat que ens interessa treure x pantalla
          $("#joke").text(currentJoke); //contingut de la propietat joke del value cridat
        });
      });
    });
  
  }) */


  // Funció AJAX
  $("#button").click(function (e) {
    e.preventDefault();

    $("#joke").html(""); //Posem el camp en blanc

    $.ajax({
      type: "get",
      url: "http://api.icndb.com/jokes/random",
      dataType: "json",
      success: function (data) {
        console.log(data);
        $("#joke").text(data.value.joke);
      },
      error: function (xhr, status, error) {
        console.log(xhr);//Camí que es fa per trobar la info
        console.log(status);//estat connexió
        console.log(error);
      }
    });

  });

});