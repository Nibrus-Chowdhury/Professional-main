
var count = 0;
const button = document.querySelector("#upArrowButton");

button.addEventListener("click", function() {
    count++;
    if (count % 2 == 1) {
        firstClick();
    } else {
        secondClick();
    }
});


function firstClick() {
    document.querySelector("#upArrow").style.transform = "rotate(225deg)";
    document.querySelector("#bottomSlide").style.bottom = "-50px";
}

function secondClick() {
    document.querySelector("#bottomSlide").style.bottom = "-870px";
    document.querySelector("#upArrow").style.transform = "rotate(45deg)";
}

var count2 = 0
const hamburger = document.querySelector("#hamburgerWrapper");

hamburger.addEventListener("click", function() {
    count2++;
    if (count2 % 2 == 1) {

    }
});

function open() {
    document.querySelector("#bar1").style.transform = "translateY(10px) rotate(45deg)";
    document.querySelector("#bar3").style.transform = "translateY(-10px) rotate(-45deg)";
    document.querySelector("#bar2").style.opacity = "0";
    document.querySelector("#sidebar").style.left = "0";
    
}

function close() {

}