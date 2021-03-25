var businessHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var events = {};

var updateDate = function() {
    var currentDay = moment().format('MMMM Do YYYY');
    $("#currentDay").append(currentDay);
};

// $("textarea").on("change", "textarea", function() {
//     for (i = 0; i < timeId; i++) {
//         var timeId = $(".time-block").find("#id")
//         console.log(timeId);
//         var eventTime = $("textarea").attr("id").text(timeId.Id);
//         console.log(eventTime);
//     }
// });

    //user clicks on text-area element
$(".form-control").on("blur", function() {
    debugger;
    var text=$("textarea").val();
    $(text).addClass("col-8 hour form-control")
        .replaceWith(text);
        
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