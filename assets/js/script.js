//Current day display variables
var currentDayEl = $("currentDay")
var currentDate = moment().format("DD MMMM YYYY HH:mm:ss")
var currentTime = moment().format("HH:mm:ss")
console.log(currentTime);


//Current day display write to HTML
$("#currentDay").html(currentDate);


//Row color change... Goes to grey when its past, green in the future and red in the present.
//d3 = grey, 77 = green, 61 = red, 

if (currentTime > "09:59:59") {
    //grey
    $("#0900-row").css("background-color", "#d3d3d3");
    //green
} else if (currentTime < "09") {
    $(".rows").css("background-color", "#77dd77");
    //red
}  else if (currentTime >= "09" || currentTime <= "09:59:59") {
    $("#0900-row").css("background-color", "#ff6961");
}

if (currentTime > "10:59:59") {
    $("#1000-row").css("background-color", "#d3d3d3");
}  else if (currentTime < "10") {
    $("#1000-row").css("background-color", "#77dd77");
} else if (currentTime >= "10" || currentTime <= "10:59:59") {
    $("#1000-row").css("background-color", "#ff6961");
}

if (currentTime > "11:59:59") {
    $("#1100-row").css("background-color", "#d3d3d3");
} else if (currentTime >= "11" || currentTime <= "11:59:59") {
    $("#1100-row").css("background-color", "#ff6961");
} else if (currentTime < "11") {
    $("#1100-row").css("background-color", "#77dd77");
}

if (currentTime > "12:59:59") {
    $("#1200-row").css("background-color", "#d3d3d3");
} else if (currentTime < "12") {
    $("#1200-row").css("background-color", "#77dd77");
} else if (currentTime >= "12" || currentTime <= "12:59:59") {
    $("#1200-row").css("background-color", "#ff6961");
}

if (currentTime > "13:59:59") {
    $("#1300-row").css("background-color", "#d3d3d3");
}  else if (currentTime < "13") {
    $("#1300-row").css("background-color", "#77dd77");
} else if (currentTime >= "13" || currentTime <= "13:59:59") {
    $("#1300-row").css("background-color", "#ff6961");
}

if (currentTime > "14:59:59") {
    $("#1400-row").css("background-color", "#d3d3d3");
}  else if (currentTime < "14") {
    $("#1400-row").css("background-color", "#77dd77");
} else if (currentTime >= "14" || currentTime <= "14:59:59") {
    $("#1400-row").css("background-color", "#ff6961");
}

if (currentTime > "15:59:59") {
    $("#1500-row").css("background-color", "#d3d3d3");
}  else if (currentTime < "15") {
    $("#1500-row").css("background-color", "#77dd77");
} else if (currentTime >= "15" || currentTime <= "15:59:59") {
    $("#1500-row").css("background-color", "#ff6961");
}

if (currentTime > "16:59:59") {
    $("#1600-row").css("background-color", "#d3d3d3");
}  else if (currentTime < "16") {
    $("#1600-row").css("background-color", "#77dd77");
} else if (currentTime >= "16" || currentTime <= "16:59:59") {
    $("#1600-row").css("background-color", "#ff6961");
}

if (currentTime > "17:59:59") {
    $("#1700-row").css("background-color", "#d3d3d3");
}  else if (currentTime < "17") {
    $("#1700-row").css("background-color", "#77dd77");
} else if (currentTime >= "17" || currentTime <= "17:59:59") {
    $("#1700-row").css("background-color", "#ff6961");
}


//Click events
$("#0900-save-button").on("click", function () {
    var nineTextBox = $("textarea#0900-text-area").val();
    console.log(nineTextBox);

    // localStorage.setItem("0900", nineTextBox);
});

$("#1000-save-button").on("click", function () {
    var tenTextBox = $("textarea#1000-text-area").val();
    console.log(tenTextBox);
});


$("#1100-save-button").on("click", function () {
    var elevenTextBox = $("textarea#1100-text-area").val();
    console.log(elevenTextBox);
});

$("#1200-save-button").on("click", function () {
    var twelveTextBox = $("textarea#1200-text-area").val();
    console.log(twelveTextBox);
});


$("#1300-save-button").on("click", function () {
    var thirteenTextBox = $("textarea#1300-text-area").val();
    console.log(thirteenTextBox);
});


$("#1400-save-button").on("click", function () {
    var fourteenTextBox = $("textarea#1400-text-area").val();
    console.log(fourteenTextBox);
});


$("#1500-save-button").on("click", function () {
    var fifteenTextBox = $("textarea#1500-text-area").val();
    console.log(fifteenTextBox);
});


$("#1600-save-button").on("click", function () {
    var sixteenTextBox = $("textarea#1600-text-area").val();
    console.log(sixteenTextBox);
});

$("#1700-save-button").on("click", function () {
    var seventeenTextBox = $("textarea#1700-text-area").val();
    console.log(seventeenTextBox);
});








