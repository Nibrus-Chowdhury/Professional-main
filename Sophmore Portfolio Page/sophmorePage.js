
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
    document.querySelector("#upArrowButton").style.backgroundColor = "#CDBE78";
    document.querySelector("#semiCircle").style.borderTop = "none";
    document.querySelector("#semiCircle").style.borderLeft = "none";
    document.querySelector("#semiCircle").style.borderRight = "none";
    document.querySelector("#semiCircle").style.borderBottom = "2px solid #CDBE78";
    document.querySelector("#block").style.backgroundColor = "#CDBE78";
    document.querySelector("#upArrow").style.borderColor = "#212121";
    document.querySelector("#upArrow").style.transform = "rotate(225deg)";
    document.querySelector("#upArrow").style.zIndex = "1";
    document.querySelector("#bottomSlide").style.bottom = "0px";
    document.querySelector("#blocker").style.backgroundColor = "#CDBE78";
}

function secondClick() {
    document.querySelector("#bottomSlide").style.bottom = "-850px";
    document.querySelector("#upArrowButton").style.backgroundColor = "transparent";
    document.querySelector("#semiCircle").style.borderTop = "2px solid #CDBE78";
    document.querySelector("#semiCircle").style.borderLeft = "2px solid #CDBE78";
    document.querySelector("#semiCircle").style.borderRight = "2px solid #CDBE78";
    document.querySelector("#semiCircle").style.borderBottom = "2px solid #212121";
    document.querySelector("#block").style.backgroundColor = "#212121";
    document.querySelector("#upArrow").style.transform = "rotate(45deg)";
    document.querySelector("#upArrow").style.borderColor = "#CDBE78";
    document.querySelector("#upArrow").style.zIndex = "0";
    document.querySelector("#blocker").style.backgroundColor = "#212121";
}
