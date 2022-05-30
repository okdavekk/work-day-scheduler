
//Current day display variables
var currentDayEl = $("currentDay")
var currentDate = moment().format("DD MMMM YYYY")
var currentTime = moment().format("HH")

console.log(currentTime);

// //Variables to change colors of row if in the past or present time
// var deductTimeColor = moment().startOf("hour").fromNow();
// var addTimeColor = moment().startOf("hour").fromNow();



//Current day display write to HTML
$("#currentDay").html(currentDate);


//REFACTOR
//REFACTOR
//REFACTOR
//Row color change for time past... Goes to white when its past
if (currentTime > 09) {
    $("#0900-row").css("background-color", "#d3d3d3");
}

if (currentTime > 10) {
    $("#1000-row").css("background-color", "#d3d3d3");
}

if (currentTime > 11) {
    $("#1100-row").css("background-color", "#d3d3d3");
}

if (currentTime > 12) {
    $("#1200-row").css("background-color", "#d3d3d3");
}

if (currentTime > 13) {
    $("#1300-row").css("background-color", "#d3d3d3");
}

if (currentTime > 14) {
    $("#1400-row").css("background-color", "#d3d3d3");
}


if (currentTime > 15) {
    $("#1500-row").css("background-color", "#d3d3d3");
}


if (currentTime > 16) {
    $("#1600-row").css("background-color", "#d3d3d3");
}

if (currentTime > 17) {
    $("#1700-row").css("background-color", "#d3d3d3");
}


//REFACTOR
//REFACTOR
//REFACTOR
//Row color change for time past... Goes to red when its the present time
if (currentTime == 09) {
    $("#0900-row").css("background-color", "#ff6961");
}
 
if (currentTime == 10) {
    $("#1000-row").css("background-color", "#ff6961");
}

if (currentTime == 11) {
    $("#1100-row").css("background-color", "#ff6961");
}

if (currentTime == 12) {
    $("#1200-row").css("background-color", "#ff6961");
}

if (currentTime == 13) {
    $("#1300-row").css("background-color", "#ff6961");
}

if (currentTime == 14) {
    $("#1400-row").css("background-color", "#ff6961");
}


if (currentTime == 15) {
    $("#1500-row").css("background-color", "#ff6961");
}


if (currentTime == 16) {
    $("#1600-row").css("background-color", "#ff6961");
}

if (currentTime == 17) {
    $("#1700-row").css("background-color", "#ff6961");
}


//REFACTOR
//REFACTOR
//REFACTOR
//Row color change for time to come... Goes to green when its in the future
if (currentTime < 09) {
    $("#0900-row").css("background-color", "#77dd77");
}

if (currentTime < 10) {
    $("#1000-row").css("background-color", "#77dd77");
}

if (currentTime < 11) { 
    $("#1100-row").css("background-color", "#77dd77");
}

if (currentTime < 12) {
    $("#1200-row").css("background-color", "#77dd77");
}

if (currentTime < 13) {
    $("#1300-row").css("background-color", "#77dd77");
}

if (currentTime < 14) {
    $("#1400-row").css("background-color", "#77dd77");
}

if (currentTime < 15) {
    $("#1500-row").css("background-color", "#77dd77");
}

if (currentTime < 16) {
    $("#1600-row").css("background-color", "#77dd77");
}

if (currentTime < 17) {
    $("#1700-row").css("background-color", "#77dd77");
}



//Click events
$("#0900-save-button").on("click", function() {
    var nineTextBox = $("textarea#0900-text-area").val();
    console.log(nineTextBox);

    // localStorage.setItem("0900", nineTextBox);
});

$("#1000-save-button").on("click", function() {
    var tenTextBox = $("textarea#1000-text-area").val();
    console.log(tenTextBox);
});


$("#1100-save-button").on("click", function() {
    var elevenTextBox = $("textarea#1100-text-area").val();
    console.log(elevenTextBox);
});

$("#1200-save-button").on("click", function() {
    var twelveTextBox = $("textarea#1200-text-area").val();
    console.log(twelveTextBox);
});


$("#1300-save-button").on("click", function() {
    var thirteenTextBox = $("textarea#1300-text-area").val();
    console.log(thirteenTextBox);
});


$("#1400-save-button").on("click", function() {
    var fourteenTextBox = $("textarea#1400-text-area").val();
    console.log(fourteenTextBox);
});


$("#1500-save-button").on("click", function() {
    var fifteenTextBox = $("textarea#1500-text-area").val();
    console.log(fifteenTextBox);
});


$("#1600-save-button").on("click", function() {
    var sixteenTextBox = $("textarea#1600-text-area").val();
    console.log(sixteenTextBox);
});

$("#1700-save-button").on("click", function() {
    var seventeenTextBox = $("textarea#1700-text-area").val();
    console.log(seventeenTextBox);
});








