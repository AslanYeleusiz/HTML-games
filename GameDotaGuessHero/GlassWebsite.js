var startButton = document.querySelectorAll(".start-btn");
var glassMain = document.querySelector(".glass");
var enigma = document.querySelector(".image");
var message = document.querySelectorAll(".message");
var texts = ['My name is Enigma', 'And I will guess your hero!', 'Guess a hero!'];
var enigma2 = document.querySelector(".image2");

startButton[0].addEventListener('click', function () {
    startButton[0].style.opacity = "0%";
    setTimeout(enterBtn, 200);
    setTimeout(styleGlass, 400);
    setTimeout(avatar, 1300);
    setTimeout(function () {
        typeText(message[0], texts[0]);
    }, 1800);
    setTimeout(function () {
        typeText(message[0], texts[1]);
    }, 4500);
    setTimeout(function () {
        typeText(message[0], texts[2]);
    }, 8400);
    setTimeout(function () {
        startButton[1].style.display = "flex";
    }, 1200);      //10500
    setTimeout(function () {
        startButton[1].style.opacity = "100%";
    }, 10600);    //10600  1300
})

startButton[1].addEventListener('click', function () {
    enigma.style.opacity = "0%";
    message[0].style.opacity = "0%";
    startButton[1].style.opacity = "0%";
    enigma2.style.display="block";
    setTimeout(function () {
        enigma.style.display = "none";
        message[0].style.display = "none";
        message[1].style.display="flex";
        startButton[1].style.display = "none";
        enigma2.style.opacity="100%";
    }, 1000);

})

function enterBtn() {
    startButton[0].style.display = "none";
    glassMain.style.display = "flex";
}

function styleGlass() {
    glassMain.style.height = "80vh";
    glassMain.style.width = "60vw";
    glassMain.style.opacity = "100%";
}

function avatar() {
    enigma.style.opacity = "100%";
}

function typeText(obj, t) {
    var text = t;
    var text2 = '';
    let n = 0;

    function typeLine() {
        let interval = setTimeout(function () {
            text2 += text[n];
            obj.innerHTML = text2;
            n++;
            if (n >= text.length) {
                clearTimeout(interval);
                return true;
            }
            typeLine();
        }, 100);
    }
    typeLine();
}

function allClear() {

}
