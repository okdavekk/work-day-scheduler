
//Current day display variables
var currentDayEl = $("currentDay")
var currentDate = moment().format("DD MMMM YYYY")
var currentTime = moment().format("HH")



// //Variables to change colors of row if in the past or present time
// var deductTimeColor = moment().startOf("hour").fromNow();
// var addTimeColor = moment().startOf("hour").fromNow();



//Current day display write to HTML
$("#currentDay").html(currentDate);


//Text areas





//REFACTOR
//REFACTOR
//REFACTOR
//Row color change for time past... Goes to white when its past
if (currentTime > 9) {
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

// //Row color change for time past... Goes to red when its the present time
// if (currentTime = 9) {
//     $("#0900-row").css("background-color", "#ff6961");
// }

// if (currentTime = 10) {
//     $("#1000-row").css("background-color", "#ff6961");
// }

// if (currentTime = 11) {
//     $("#1100-row").css("background-color", "#ff6961");
// }

// if (currentTime = 12) {
//     $("#1200-row").css("background-color", "#ff6961");
// }

// if (currentTime = 13) {
//     $("#1300-row").css("background-color", "#ff6961");
// }

// if (currentTime = 14) {
//     $("#1400-row").css("background-color", "#ff6961");
// }


// if (currentTime = 15) {
//     $("#1500-row").css("background-color", "#ff6961");
// }


// if (currentTime = 16) {
//     $("#1600-row").css("background-color", "#ff6961");
// }

// if (currentTime = 17) {
//     $("#1700-row").css("background-color", "#ff6961");
// }


//REFACTOR
//REFACTOR
//REFACTOR
//Row color change for time to come... Goes to green when its in the future
if (currentTime < 9) {
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
$("#0900-save-button").on("click", function(event) {
    event.preventDefault()

    var nineTextBox = $("textarea#0900-text-area").val();

    console.log(nineTextBox);

    localStorage.setItem("0900", nineTextBox);
});

$("#1000-save-button").on("click", function() {
    alert("hi");
});


$("#1100-save-button").on("click", function() {
    alert("hi");
});

$("#1200-save-button").on("click", function() {
    alert("hi");
});


$("#1300-save-button").on("click", function() {
    alert("hi");
});


$("#1400-save-button").on("click", function() {
    alert("hi");
});


$("#1500-save-button").on("click", function() {
    alert("hi");
});


$("#1600-save-button").on("click", function() {
    alert("hi");
});

$("#1700-save-button").on("click", function() {
    alert("hi");
});




//Local Storage




