var events = {
    text: "",
    time: ""
};

var updateDate = function () {
    var currentDay = moment().format('MMMM Do YYYY');
    $("#currentDay").append(currentDay);
};

//assign event title based on save button
$(".save-btn").on("click", function () {
<<<<<<< HEAD
    debugger;
=======
>>>>>>> feature/change-colours
    var eventText = $(this).siblings("textarea").val();
    var eventTime = $(this).siblings(".time-block").attr("id");
    var textArea = $(this).siblings("textarea");
    $(textArea).replaceWith('<textarea class="col-8 hour"' + 'id="' + eventTime + '">' + eventText + '</textarea>');
<<<<<<< HEAD
    console.log(eventText);
    console.log(eventTime);
    events.text = eventText;
    events.time = eventTime;
    console.log(events);
=======
    changeColours();
    events.text = eventText;
    events.time = eventTime;
>>>>>>> feature/change-colours
    saveEvents(events);
});

var saveEvents = function (events) {
    localStorage.setItem(`${events.time}`, events.text);
};

var loadEvents = function () {
<<<<<<< HEAD
    debugger;
    for (i = 9; i <= 17; i++) {
        var loadedEvent = localStorage.getItem(i)
        console.log(loadedEvent);
=======
    for (i = '0' + 9; i <= 17; i++) {
        var loadedEvent = localStorage.getItem(i)
>>>>>>> feature/change-colours
        if (loadedEvent) {
            $(`#${i}`).siblings("textarea").val(`${loadedEvent}`);
        } 
    }
};

<<<<<<< HEAD
=======

var changeColours = function() {
    $("textarea").each(function() {
        if (moment().format('H') === $(this).attr("id")) {
            $(this).addClass("present");
        }
        if (moment().format('H') > $(this).attr("id")) {
            $(this).addClass("past");
        } 
        if (moment().format('HH') < $(this).attr("id")) {
            $(this).addClass("future");
        }
    });
};

changeColours();
>>>>>>> feature/change-colours
updateDate();
loadEvents();