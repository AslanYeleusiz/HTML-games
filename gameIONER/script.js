let btn = document.querySelectorAll(".btn");
let text = document.querySelector(".text");
let contain = document.querySelector(".contain");
let restart = document.querySelector(".restart");
let png = document.querySelector(".png");
let pngnum=1;
let b;
let k;
let player = 1;
let startend = true;
let arr = new Array;
let p = "";
for (let n = 0; n < btn.length; n++)
    arr[n] = 0;
contain.style.display = "none";
restart.style.display = "none";


png.addEventListener('click',function(){
    png.style.backgroundImage = "url(img/"+pngnum+".PNG)";
    pngnum++;
    if(pngnum==4) pngnum=1;
})
restart.addEventListener('click', function () {
    for (let n = 0; n < btn.length; n++) {
        btn[n].style.background = "white";
        arr[n] = 0;
    }
    smena(0);
})

text.addEventListener('click', function () {
    contain.style.display = "inline-block";
    text.style.border = "none";
    restart.style.display = "block";
    if (startend) smena();
    startend = false;
})
for (let n = 0; n < btn.length; n++) {
    btn[n].addEventListener('click', function () {
        b = Math.floor(n / 10);
        k = n % 10;
        console.log("bagan: " + b + "\nkatar: " + k);
        if (arr[n] == 0) {
            play(b, k);
            smena(n);
        }

    })
}

function play(b, k) {
    let color="";
    for (let n = 0; n < btn.length; n++) {
        if (Math.floor(n / 10) <= b && n % 10 >= k) {
            if(player==0&&arr[n]==0)
            btn[n].style.background = "red";
            if(player==1&&arr[n]==0) btn[n].style.background = "blue";
            arr[n] = 1;
        }
    }
}

function smena(n) {
    if (n != 90) {
        if (player == 1) {
            p = "RED";
            player = 0;
        } else {
            p = "BLUE";
            player = 1;
        }
    }
    else p = "???";
    text.textContent = p;
}
