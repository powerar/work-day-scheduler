var updateDate = function() {
    debugger;
    var currentDay = moment().format('MMMM Do YYYY');
    $("#currentDay").append(currentDay);
};

updateDate();