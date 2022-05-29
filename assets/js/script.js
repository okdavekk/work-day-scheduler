
//Current day display variables
var currentDayEl = $("currentDay")
var currentDate = moment().format("DD MMMM YYYY")

//Variables to change colors of row if in the past or present time
var deductTimeColor = moment().startOf('hour').fromNow();
var addTimeColor = moment().startOf('hour').fromNow();



//Current day display write to HTML
$("#currentDay").html(currentDate);




console.log();