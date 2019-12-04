function getNumber(num){
    let inputNumber = document.getElementById("input");
    switch(num){
        case 1:
            inputNumber.value +=`1`
            break;
        case 2:
            inputNumber.value +=`2`
            break;
        case 3:
            inputNumber.value +=`3`
            break;
        case 4:
            inputNumber.value +=`4`
            break;
        case 5:
            inputNumber.value +=`5`
            break;
        case 6:
            inputNumber.value +=`6`
            break;
        case 7:
            inputNumber.value +=`7`
            break;    
        case 8:
            inputNumber.value +=`8`
            break;        
        case 9:
            inputNumber.value +=`9`
            break;    
        case 0:
            inputNumber.value +=`0`
            break;    
    }

}
function getOperand(operand){
    let inputOperand = document.getElementById("input");
    switch(operand){
        case '+':
            inputOperand.value +='+'
            break;
        case '-':
            inputOperand.value +='-'
            break;
        case '/':
            inputOperand.value +='/'
            break;
        case '*':
            inputOperand.value +='*'
            break;
        case '.':
            inputOperand.value +='.'
            break;
    }
}
function compute(){
    let inpComp = document.getElementById("input");
    inpComp.value=eval(inpComp.value)
}
function backspace(){
    let inputBackspace = document.getElementById("input");
    let x = inputBackspace.value;
    if(x.length>0){
        // usuwanie
        x=x.substring(0, x.length-1); 
        inputBackspace.value=x;
    }
}
function clearScreen(){
    document.getElementById("input").value="";
}



const red=document.querySelector(".red");
const blue=document.querySelector(".blue");
const orange=document.querySelector(".orange");
const green=document.querySelector(".green");
const black=document.querySelector(".black");
const yellow=document.querySelector(".yellow");

function changeBackgroundColor(){
    document.body.className=this.className;

}
red.addEventListener("click", changeBackgroundColor);
blue.addEventListener("click", changeBackgroundColor);
orange.addEventListener("click", changeBackgroundColor);
green.addEventListener("click", changeBackgroundColor);
black.addEventListener("click", changeBackgroundColor);
yellow.addEventListener("click", changeBackgroundColor);


const redFont=document.querySelector(".redFont");
const blueFont=document.querySelector(".blueFont");
const orangeFont=document.querySelector(".orangeFont");
const greenFont=document.querySelector(".greenFont");
const silverFont=document.querySelector(".silverFont");
const yellowFont=document.querySelector(".yellowFont");
const allCalcButtons = document.querySelectorAll('.calc button');

function changeFontColorToRed(){
   for(let i=0;i<allCalcButtons.length;i++){
       allCalcButtons[i].style.color="red";
   }
}
redFont.addEventListener("click",changeFontColorToRed);

function changeFontColorToBlue(){
    for(let i=0;i<allCalcButtons.length;i++){
        allCalcButtons[i].style.color="blue";
    }
 }
blueFont.addEventListener("click",changeFontColorToBlue);

function changeFontColorToOrange(){
    for(let i=0;i<allCalcButtons.length;i++){
        allCalcButtons[i].style.color="orangered";
    }
 }


orangeFont.addEventListener("click",changeFontColorToOrange);

function changeFontColorToGreen(){
    for(let i=0;i<allCalcButtons.length;i++){
        allCalcButtons[i].style.color="green";
    }
 }


greenFont.addEventListener("click",changeFontColorToGreen);

function changeFontColorToSilver(){
    for(let i=0;i<allCalcButtons.length;i++){
        allCalcButtons[i].style.color="silver";
    }
 }


silverFont.addEventListener("click",changeFontColorToSilver);

function changeFontColorToYellow(){
    for(let i=0;i<allCalcButtons.length;i++){
        allCalcButtons[i].style.color="yellow";
    }
 }


yellowFont.addEventListener("click",changeFontColorToYellow);

const font1=document.querySelector(".font1");
const font2=document.querySelector(".font2");
const font3=document.querySelector(".font3");
const font4=document.querySelector(".font4");

function changeFontStyle1(){
    for(let i=0;i<allCalcButtons.length;i++){
        allCalcButtons[i].style.fontFamily="Orbitron";
    }
 }
 font1.addEventListener("click",changeFontStyle1);
 
 function changeFontStyle2(){
    for(let i=0;i<allCalcButtons.length;i++){
        allCalcButtons[i].style.fontFamily="Odibee Sans";
    }
 }
 font2.addEventListener("click",changeFontStyle2);

 function changeFontStyle3(){
    for(let i=0;i<allCalcButtons.length;i++){
        allCalcButtons[i].style.fontFamily="Tomorrow";
    }
 }
 font3.addEventListener("click",changeFontStyle3);

 function changeFontStyle4(){
    for(let i=0;i<allCalcButtons.length;i++){
        allCalcButtons[i].style.fontFamily="Audiowide";
    }
 }
 font4.addEventListener("click",changeFontStyle4);




  





