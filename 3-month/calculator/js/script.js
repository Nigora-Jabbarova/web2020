'use strict';

let calcButtons = {
    ac: "AC",
    ce: 'CE',
    ten: '%',
    divide: '/',
    seven: 7,
    eight: 8,
    nine: 9,
    multiply: '*',
    four: 4,
    five: 5,
    six: 6,
    rest: '-',
    one: 1,
    two: 2,
    three: 3,
    add: '+',
    point: '.',
    double_zero: '00',
    zero: 0,
    equal: '=',
}

var key;
let buttons = document.querySelector('#buttons');



for(key in calcButtons){
    buttons.innerHTML += "<button class = 'button' id = "+ key +" value= "+ calcButtons[key] +">"+calcButtons[key]+"</button>";    
}


//использовать e.target
var calculationFinished = false;
var calculations = [];
let mainText = document.querySelector('#main-text')[0];
document.getElementById('equal').addEventListener('button', evaluate);


var buttonCount = document.querySelectorAll('button').length;

for(var i=0; i<buttonCount; i++){
    document.getElementsByClassName('button')[i].addEventListener('click', function(){
        checkButton(this.innerHTML);
    });
}

function checkButton(value){
    var isNumber = Number.isInteger(Number(value));
    if (value === "="){

    }else if(value ==="AC"){
        calculationFinished = false;
        updateMainText("");
        calculations = [];
    }else if(value ==='CE'){
        calculationFinished = false;
        calculations.pop();
        updateMainText(updateCalculations());
    }else if(screen.innerHTML === "" && isNumber ===false){

    }else if(calculationFinished && isNumber){
        calculationFinished = false;
        calculations = [];
        calculations.push(value);
        updateMainText(updateCalculations());
    }else{
        calculationFinished = false;
        calculations.push(value);
        updateMainText(updateCalculations());
    }
}

function evaluate(){
    if(screen.innerHTML == ""){

    }else{
        var result = Math.round(eval(screen.innerHTML)*1000000000)/1000000000;
        if(result > 1000000000){
            updateMaintext('слишком большое число');
            
            calculations = [];
            calculationFinished = true;
        }
    }
}

function updateCalculations(){
    var joinedCalculations = calculations.join("");
    return joinedCalculations;
}

function updateMainText(newText){
    screen.innerHTML = newText;
}







var clickButtons = document.querySelectorAll(".button");

for(var i = 0; i<clickButtons.length; i++){
    clickButtons[i].addEventListener('click',function(e){
        mainText += e.target.value;

    });
}


