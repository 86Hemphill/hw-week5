// Create Variables
var currentJumbo = $("#currentDay");

var currentDayTime = moment();

// Append current day and time to Jumbotron
$("#currentDay").text(currentDayTime.format("LLLL"));

// Create Rows
for (i = 0; i < 24; i++){

    $("#container").append('<div id="div-row" class="row"></div>')


// Create Grid - Time
    $("#div-row").append(`<div 
        id="hourCol" 
        class="col-lg-2"></div>`);



// Create Grid - Event
    $("#div-row").append(`<div 
        id="eventDescCol" 
        class="col-lg-10"></div>`);



// Create Grid - Save
    $("#div-row").append(`<div 
        id="saveCol" 
        class="col-lg-2"></div>`);


};

