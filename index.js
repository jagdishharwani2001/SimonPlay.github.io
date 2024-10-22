let gameseq = [];
let userseq = [];
let level = 0;
let started = false;
let p = document.querySelector("p");
let btns = ['container1','container2',"container3","container4"];
document.addEventListener("keypress",()=>{
    if(started==false){
        console.log("Game is started")
        started= true;
        levelUp();
    }
})
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}
function levelUp(){
    userseq = [];
    level++;
    p.innerText = `Level : ${level}`;

    let ranInd = Math.floor(Math.random()*3);
    let ranColr = btns[ranInd];

    let randBtn = document.querySelector(`.${ranColr}`);

    gameseq.push(ranColr);
    console.log(gameseq);
    btnFlash(randBtn);
}

function checkAns(indx){
    // console.log("curr level :",level);


    if(userseq[indx]===gameseq[indx]){
        if(userseq.length== gameseq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        p.innerHTML = `Game Over! Your score is <b> ${level} </b><br>prss any key to start the game`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150)
        reset();
    }
}

function btnPress(){
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    console.log(userseq);
    checkAns(userseq.length-1);
}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnPress);
}


function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}