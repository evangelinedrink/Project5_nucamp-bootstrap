$(function() { //$(function(){...}); is shorthand for the jQuery ready method (or ready function). This function is written as $(document).ready(function(){...});
$(".carousel").carousel({interval:2000}); //Set the carousel image cycle interval to 2000 ms instead of 5000 ms.
$("#carouselButton").click(function(){ //Implement the function that will display a pause button when carousel is playing and a play button when the carousel is paused.
        if ($("#carouselButton").children("i").hasClass("fa-pause")){
        $(".carousel").carousel("pause");
        $("#carouselButton").children("i").removeClass("fa-pause"); //Removes the pause button when the carousel is paused.
        $("#carouselButton").children("i").addClass("fa-play"); //Adds the play button when the carousel is paused.
    } else {
        $(".carousel").carousel("cycle"); //If the carousel is moving the following buttons will show.
        $("#carouselButton").children("i").removeClass("fa-play"); //Removes the play button when the carousel is running.
        $("#carouselButton").children("i").addClass("fa-pause"); //Adds the pause button when the carousel is being run.
    }
});
});