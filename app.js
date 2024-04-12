//This in for adding functions
let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let maxlevel=[];
let btn=["pink","blue","red","green"];
document.addEventListener('keydown',function(){
     if(started==false){
        console.log('game started');
        started =true;
        levelUp();
     }
});
h4=document.querySelector('h4');

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove('userflash');
    },250);
}
function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove('gameflash');
    },250);
}
let levelUp=function(){
    userseq=[];
    level++;
    h4.innerText=`level ${level}`;
    let randomidx=Math.floor(Math.random()*4);
    randomcolor=btn[randomidx];
    gameseq.push(randomcolor);
    console.log(gameseq);
    // console.log(randomcolor);
     randombtn=document.querySelector(`.${randomcolor}`);
    gameflash(randombtn);
}
function check(idx){
    // console.log('curr level is ',level);
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        maxlevel.push(level);
        h4.innerHTML=`game over! your score was <b> ${level} </b> <br>your highest score is ${maxi(maxlevel)} <br> press any key to restart `;
     let body=document.querySelector('body');
     body.style.backgroundColor="red";
     setTimeout(function(){
        body.style.backgroundColor="white";  
     },200);
     reset();
    }
}
function btnpress()
{
    // console.log(this);
    let btn=this;
    userflash(btn);
    let usercolor=btn.getAttribute('id');
    // console.log(usercolor);
    userseq.push(usercolor);
    check(userseq.length-1);
}
 
let allbtns = document.querySelectorAll('.box');
for (let i = 0; i < allbtns.length; i++) {
    allbtns[i].addEventListener('click', btnpress);
}

function reset(){
     gameseq=[];
 userseq=[];
 started=false;
 level=0;
}
function maxi(arr){
    let max=arr[0];
    for(a of arr){
        if(max<a){
            max=a;
        }
    }
    return max;
}