var events = {
    text: "",
    time: ""
};

var updateDate = function () {
    var currentDay = moment().format('MMMM Do YYYY');
    $("#currentDay").append(currentDay);
};

//assign event title based on save button
$(".saveBtn").on("click", function () {
    var eventText = $(this).siblings("textarea").val();
    var eventTime = $(this).siblings(".time-block").attr("id");
    var textArea = $(this).siblings("textarea");
    $(textArea).replaceWith('<textarea class="col-8 hour"' + 'id="' + eventTime + '">' + eventText + '</textarea>');
    changeColours();
    events.text = eventText;
    events.time = eventTime;
    saveEvents(events);
});

var saveEvents = function (events) {
    localStorage.setItem(`${events.time}`, events.text);
};

var loadEvents = function () {
    for (i = '0' + 9; i <= 17; i++) {
        var loadedEvent = localStorage.getItem(i)
        if (loadedEvent) {
            $(`#${i}`).siblings("textarea").val(`${loadedEvent}`);
        } 
    }
};


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
updateDate();
loadEvents();