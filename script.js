//btn = box ....... gameSeq = boxSeq


let boxSeq=[];
let userSeq=[];
let boxes = ["red" , "green" , "blue" , "yellow"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function(){
    if(started == false){
    console.log("game sTARTED ");
    started = true;

    levelUp();
    };
});

function  boxFlash(box){
    box.classList.add("flash");
    setTimeout(function(){
        box.classList.remove("flash");
    },250)
}
function  userFlash(box){
    box.classList.add("userFlash");
    setTimeout(function(){
        box.classList.remove("userFlash");
    },250)
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    
    let randIdx = Math.floor(Math.random()*3);
    let randColor = boxes[randIdx];
    let randbox = document.querySelector(`.${randColor}`);
    console.log(randIdx);
    console.log(randbox);
    console.log(randColor);
    boxSeq.push(randColor);
    console.log(boxSeq);
    boxFlash(randbox);
}
function checkAns(idx){
    console.log("curr level" , level);
 
    if(userSeq[idx] ===boxSeq[idx]){
        console.log("same value");
        if(userSeq.length == boxSeq.length){
           setTimeout(levelUp,100);
    }}else{
        h2.innerHTML= `Game Over! \n <b> Your Score was ${level} </b> \n  Press any key to re-start `
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150)
        reset();
    }
}

function boxPress(){
// console.log(`${this} box was pressed`);
let box = this;
userFlash(box);
// console.log(this);
userColor = box.getAttribute("id");
console.log(userColor);
userSeq.push(userColor);
checkAns(userSeq.length - 1);
}

let allBoxes = document.querySelectorAll(".box");
for(box of allBoxes){
    box.addEventListener("click" , boxPress );
}

function reset(){
    started = false ;
    boxSeq = [];
    userSeq = [];
    level=0 ;
}