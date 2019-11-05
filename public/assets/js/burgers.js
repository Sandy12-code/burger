
$(function () {
  $(".create-burger").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#newburger").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("Added new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  $(".eatburger").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");
    var devouredState = {
      devoured: 1
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(
      function () {
        console.log("Burger devoured");
        location.reload();
      });

  });
  $(".trashburger").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");

    // Send the delete request.
    $.ajax({
      type:"DELETE",
      url: "/api/burgers/" + id
    }).then(location.reload());
  });

});

