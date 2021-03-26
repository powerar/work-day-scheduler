var eventTimes = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var events = [];

var updateDate = function() {
    var currentDay = moment().format('MMMM Do YYYY');
    $("#currentDay").append(currentDay);
};

//assign event title based on save button
$(".save-btn").on("click", function() {
    debugger;
    var eventText = $("textarea").val();
    var eventTime = $(".time-block").find("#id");
    $("textarea").replaceWith('<textarea class="col-8 hour"' + 'id="' + eventTime + '">' + eventText + '</textarea>');
    events.push(eventText);
});

var saveEvents = function() {
    localStorage.setItem("events", JSON.stringify(events));
}

// var loadEvents = function() {
//     $("#task-form-modal .save-btn").click(function() {
//     // get form values
//     var eventText = $(".form-control").val();
  
//     if (eventText) {
//       createEvent(eventText);
  
//       // save in events array
//       events.eventText.push({
//         text: eventText,
//         time: taskDate
//       });
  
//       saveEvents();
//     }
//   })
// };


// var changeColour = function() {
//     debugger;
//     for (i = 0; i < businessHours.length; i++) {
//         var hourEl = document.querySelector("#" + businessHours[i]);
//         if (moment().isBefore(hourEl[i])) {
//             $(".hour").addClass("past");
//         } else {
//             break;
//         }
//     }
// };

updateDate();