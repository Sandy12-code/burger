var burgerList = [];

var getBurgers = function(){
  console.log('getting list of burgers');
  showBurgers();
};

var showBurgers = function(){
  // loop through array of burgers and create an li tag for each one
  // append each li tag to ul#burger-list

};

$(".create-burger").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#bug").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("new burger");
        // Reload the page to get the updated list
        getBurgers();
      }
    );
  });

// getBurgers();