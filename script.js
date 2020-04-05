// Create Variables
var currentJumbo = $('#currentDay');
var now = parseInt(moment().format('H'));
var startTime = 4;
var endTime = 10;

var events = JSON.parse(localStorage.getItem('events')) || [];
var checkStorage = localStorage.getItem('events');

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
    //             data-id=${i}>`); 

    // Check and apply local storage
    if (checkStorage == null) {

        events.push({eventId : i});
        localStorage.setItem('events', JSON.stringify(events));
        
    };
        
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

    // Set Timeframe Class
    if (moment(startTime).isBefore(now)) {
        eventDescCol.addClass('past');
    } else if (moment(startTime).isSame(now)) {
        eventDescCol.addClass('present');
    } else if (moment(startTime).isAfter(now)) {
        eventDescCol.addClass('future');
    };

    // Create TextArea
    var eventDescText = $('<textarea class="col-12" cols="90" rows="2"/>');
    eventDescText.attr('data-id', i);
    eventDescCol.html(eventDescText);
    divRow.append(eventDescCol);

    var eventText = events[i].description;
    eventDescText.val(eventText);

// Create Grid - Save
    var saveCol = $('<div class="saveBtn col-2">');
    divRow.append(saveCol);
    var saveBtn = $('<i class="fas fa-save"></i>');
    saveBtn.attr('data-id', i);
    saveCol.html(saveBtn);
};

    // Btn Event Listener
    $('.fa-save').on("click", function() {
        // Set id
        var dataId = $(this).attr('data-id');
        var eventText = $(`textarea[data-id|='${dataId}']`).val();
        events[dataId].description = eventText;

        localStorage.setItem('events', JSON.stringify(events));

    });