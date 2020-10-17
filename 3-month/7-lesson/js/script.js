'use strict';
let $start = document.querySelector('#start');
let $game = document.querySelector('#game');
let $time = document.querySelector('#time');
let $timeHeader = document.querySelector('#time-header');
let $resultHeader = document.querySelector('#result-header');
let $result = document.querySelector('#result');
let $gameTime = document.querySelector('#game-time');
let $app_header = document.querySelector('.app__header');



$start.addEventListener('click', startGame);
$game.addEventListener('click',handleBoxClick);
$gameTime.addEventListener('input',setGameTime);
let score = 0;
let isGameStarted = false; 
function hide(e){
    e.classList.add('hide');
}
function show(e){
    e.classList.remove('hide');
}

function startGame(){
    if(!isGameStarted){
        show($timeHeader);
        hide($resultHeader);
        isGameStarted = true;
        setGameTime();
        $gameTime.setAttribute('disabled', 'true');
        $game.style.backgroundColor = '#ffffff';
        $start.classList.add('hide');
        
        let interval = setInterval(function () {
            var time = parseFloat($time.textContent);
            if(time<=0){
                endGame();
            }else{
                $time.textContent = (time - 0.1).toFixed(1);
            }
            
        },100);
        renderBox();

        function endGame(){
            clearInterval(interval);
            setGameScore();
            $gameTime.removeAttribute('disabled');
            score = 0;
            isGameStarted = false;
            $start.classList.remove('hide');
            $game.innerHTML = '';
            $game.style.backgroundColor = '#ccc';
            $timeHeader.classList.add('hide');
            $resultHeader.classList.remove('hide');
            
        }
    }
}

function setGameScore() {
    $result.textContent = score.toString();
    hide($timeHeader);
    show($resultHeader);
}

function setGameTime(){
    var time = $gameTime.value;
    $time.textContent = parseFloat(time);
    show($timeHeader);
    hide($resultHeader);
}



function renderBox(){
    $game.innerHTML = "";
    let boxSize = getRandom(30,100);
    window.boxColor = getRandomListedColor();
    var gameSize = $game.getBoundingClientRect();
    var maxTop = gameSize.height - boxSize;
    var maxLeft = gameSize.width - boxSize;
    let box = document.createElement('div'); 
    box.style.height = box.style.width = boxSize + 'px';
    box.style.position = 'absolute';  
    box.style.backgroundColor = window.boxColor;
    box.style.top = getRandom(0,maxTop) + 'px';
    box.style.left = getRandom(0,maxLeft) + 'px';
    box.style.cursor = 'pointer'; 
    box.setAttribute('data-box','true');
    $game.insertAdjacentElement('afterbegin',box);  
    if(window.boxColor == 'black' || window.boxColor == 'grey'){
        let failedBox = setTimeout(function() {
            $game.innerHTML = "";
        }, 2000);
        clearTimeout(failedBox);
    }

    console.log(window.boxColor);
}


    let input = document.createElement('textarea');
    input.style.height = 100 + 'px';
    input.style.width = 300 + 'px';
    //input.setAttribute= ('placeholder','black = -3points, grey = -1point, yellow = 2points, violete = 5points, rest = 1point');
    input.setAttribute('disabled','true');
    $app_header.insertAdjacentElement('afterbegin',input);

function handleBoxClick(e){
    if(!isGameStarted){
        return;
        }
        if(e.target.dataset.box){
            if(window.boxColor == window.colors[6]){
                score-= 1;
            }else if(window.boxColor == window.colors[1]){
                score += 2;
            }else if(window.boxColor == window.colors[4]){
                score += 5;
            }else if(window.boxColor == window.colors[0]){
                score -= 3;
            }else{
                score++;
            }
        console.log(score);
        renderBox();
    }
}
function getRandom(max,min) {
    return Math.floor(Math.random()*(max-min) + min);
}

function getRandomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (let index = 0; index < 6; index++) {
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}




function getRandomListedColor(){
    window.colors = [
        'black',
        'yellow',
        'green',
        'red',
        'indigo',
        'pink',
        'grey'
    ];
    var randomIndex = Math.floor(Math.random() * 7);
    return window.colors[randomIndex];
}