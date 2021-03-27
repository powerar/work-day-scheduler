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
    debugger;
    var eventText = $(this).siblings("textarea").val();
    var eventTime = $(this).siblings(".time-block").attr("id");
    var textArea = $(this).siblings("textarea");
    $(textArea).replaceWith('<textarea class="col-8 hour"' + 'id="' + eventTime + '">' + eventText + '</textarea>');
    console.log(eventText);
    console.log(eventTime);
    events.text = eventText;
    events.time = eventTime;
    console.log(events);
    saveEvents(events);
});

var saveEvents = function (events) {
    localStorage.setItem(`${events.time}`, events.text);
};

var loadEvents = function () {
    debugger;
    for (i = 9; i <= 17; i++) {
        var loadedEvent = localStorage.getItem(i)
        console.log(loadedEvent);
        if (loadedEvent) {
            $(`#${i}`).siblings("textarea").val(`${loadedEvent}`);
        } 
    }
};

updateDate();
loadEvents();