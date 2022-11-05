
//Detecting Button Press

document.querySelectorAll("button").forEach(elem => elem.addEventListener("click", handleClick));
function handleClick() {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
}

//Detecting keyBoard Press

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})

//Making Sound

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kickbass = new Audio("./sounds/kick-bass.mp3");
            kickbass.play();
            break;
        default: console.log(key);
            break;
    }
}

//To animate the button when clicked

function buttonAnimation(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.toggle("pressed");

    setTimeout(function () { activeButton.classList.toggle("pressed"); }, 100);
}