
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
