// Create Variables
var currentJumbo = $('#currentDay');
var currentDayTime = parseInt(moment().format('H'));
var startTime = 4;
var endTime = 10;


// Append current day and time to Jumbotron
$('#currentDay').text(moment().format('LLLL'));

// Create Rows
for (var i = 0; i < 19; i++){

    var divRow = $('<div class="row">');
    divRow.attr('data-id', i);
    $('.container').append(divRow);
    // $('.container').append(`
    //     <div    id='div-row' 
    //             class='row'
    //             data-id='i'>`); 
        
// Create Grid - Time
    var timeCol = $('<div class="time-block hour col-2">');
    var hour = moment(startTime, 'h').format('LT');
    timeCol.text(hour);
    divRow.append(timeCol);
    startTime++
    // $("#div-row").append(`<div 
    //     id='timeCol' 
    //     class='col-lg-2 time-block hour'
    //     ></div>`);

// Create Grid - Event
    var eventDescCol = $('<div class="description col-8">');
    eventDescCol.attr('data-time', startTime);

    if (moment(startTime).isBefore(currentDayTime)) {
        eventDescCol.addClass('past');
        console.log('past');
    } else if (moment(startTime).isSame(currentDayTime)) {
        eventDescCol.addClass('present');
        console.log('present');
    } else if (moment(startTime).isAfter(currentDayTime)) {
        eventDescCol.addClass('future');
        console.log('future');
    };

    var eventDescText = $('<textarea class="col-12" cols="90" rows="2"/>');
    eventDescText.attr('data-id', i);
    eventDescCol.html(eventDescText);
    divRow.append(eventDescCol);

// Create Grid - Save

    var saveCol = $('<div class="saveBtn col-2">');
    divRow.append(saveCol);
    var saveBtn = $('<i class="fas fa-save"></i>');
    saveBtn.attr('data-id', i);
    saveCol.html(saveBtn);
    

};

