
//Current day display variables
var currentDayEl = $("currentDay")
var currentDate = moment().format("DD MMMM YYYY")
var currentTime = moment().format("HH")



//Variables to change colors of row if in the past or present time
var deductTimeColor = moment().startOf('hour').fromNow();
var addTimeColor = moment().startOf('hour').fromNow();



//Current day display write to HTML
$("#currentDay").html(currentDate);

//THESE DONT WORK!!!
//THESE DONT WORK!!!
//THESE DONT WORK!!!
//Row color change for time past... Goes to red when its past
if (currentTime > 9){
    $("0900-row").css("color", "red");
}

if (currentTime > 10){
    $("1000-row").css("color", "red");
}

if (currentTime > 11){
    $("1100-row").css("color", "red");
}

if (currentTime > 12){
    $("1200-row").css("color", "red");
}

if (currentTime > 13){
    $("1300-row").css("color", "red");
}

if (currentTime > 14){
    $("1400-row").css("color", "red");
}


if (currentTime > 15){
    $("1500-row").css("color", "red");
}


if (currentTime > 16){
    $("1600-row").css("color", "red");
}

if (currentTime > 17){
    $("1700-row").css("color", "red");
}


//THESE DONT WORK!!!
//THESE DONT WORK!!!
//THESE DONT WORK!!!
//Row color change for time to come... Goes to green when its in the future
if (currentTime < 9){
    $("0900-row").css("color", "green");
}

if (currentTime < 10){
    $("1000-row").css("color", "green");
}

if (currentTime < 11){
    $("1100-row").css("color", "green");
}

if (currentTime < 12){
    $("1200-row").css("color", "green");
}

if (currentTime < 13){
    $("1300-row").css("color", "green");
}

if (currentTime < 14){
    $("1400-row").css("color", "green");
}


if (currentTime < 15){
    $("1500-row").css("color", "green");
}


if (currentTime < 16){
    $("1600-row").css("color", "green");
}

if (currentTime < 17){
    $("1700-row").css("color", "green");
}




console.log(currentTime);
