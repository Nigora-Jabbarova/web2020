
let $body = document.body;
/*$body.insertAdjacentHTML('beforeend', '<img src="logo/cat.png" id="cat">');
let $cat = document.querySelector('#cat');
$cat.style.position = 'fixed';

let $lorem = document.querySelector('#lorem');
$lorem.style.fontSize = '30px'; 
document.onmousemove = function(e){
    console.log(e.clientX);
    console.log(e.clientY);
    $cat.style.left = e.clientX + 'px';
    $cat.style.top = e.clientY + 'px'; 
}*/
let $blockGenerator = document.querySelector('#block');
let $inputRangeAllCorners = document.querySelector('#all-corners');
$inputRangeAllCorners.value = 0;
let $outputcodeall = document.querySelector('#outputcode_all');
$outputcodeall.value = '1px';
let $color = document.querySelector('#color');
let $style = document.querySelector('#style');
let $Color = document.querySelector('#Color');
$inputRangeAllCorners.addEventListener('input', function(){
    $blockGenerator.style.borderRadius = this.value + 'px'; 
    $outputcodeall.value = ` ${this.value}px`;
    $outputcodeTL.value = `${this.value}px`;
    $inputRangeTopLeftRadius.value = this.value;
    $inputRangeTopRightRadius.value = this.value;
    $outputcodeTR.value = `${this.value}px`;
    $inputRangeBottomLeftradius.value = this.value;
    $outputcodeBL.value = `${this.value}px`;
});

let $inputRangeTopLeftRadius = document.querySelector('#top-left-radius')
$inputRangeTopLeftRadius.value = 0;
let $outputcodeTL = document.querySelector('#outputcode-tl');
$outputcodeTL.value = '1px';
$inputRangeTopLeftRadius.addEventListener('input', function(){
    $blockGenerator.style.borderTopLeftRadius = this.value + 'px';
    $outputcodeTL.value = `${this.value}px`;
});

let $inputRangeTopRightRadius = document.querySelector('#top-right-radius');
$inputRangeTopRightRadius.value = 0;
let $outputcodeTR = document.querySelector('#outputcode-tr');
$outputcodeTR.value = '1px';
$inputRangeTopRightRadius.addEventListener('input', function(){
    $blockGenerator.style.borderTopRightRadius = this.value + 'px';
    $outputcodeTR.value = `${this.value}px`;
});

let $inputRangeBottomLeftradius = document.querySelector('#bottom-left-radius');
$inputRangeBottomLeftradius.value = 0;
let $outputcodeBL = document.querySelector('#outputcode-bl');
$outputcodeBL.value = '1px';
$inputRangeBottomLeftradius.addEventListener('input', function(){
    $blockGenerator.style.borderBottomLeftRadius = this.value + 'px';
    $outputcodeBL.value = `${this.value}px`;
});

let $inputRangeBottomRightRadius = document.querySelector('#bottom-right-radius');
$inputRangeBottomRightRadius.value = 0;
let $outputBR = document.querySelector('#outputcode-br');
$outputBR.value = '1px';
$inputRangeBottomRightRadius.addEventListener('input', function(){
    $blockGenerator.style.borderBottomRightRadius = this.value + 'px';
    $outputBR.value = `${this.value}px`;
});

let $inputrangeBorderWidth = document.querySelector('#border-width');
$inputrangeBorderWidth.value = 0;
let $outputWidth = document.querySelector('#output-width');
$outputWidth.value = '';
$inputrangeBorderWidth.addEventListener('input',function(){
    $blockGenerator.style.borderWidth = this.value + 'px';
    $outputWidth.value = `${this.value}px`;
});

$color.addEventListener('change', function(){
    $blockGenerator.style.backgroundColor = this.value;
});
$style.addEventListener('change', function(){
    $blockGenerator.style.borderStyle = this.value;
});

$Color.addEventListener('input',function(){
    $blockGenerator.style.backgroundColor = this.value;
});
document.querySelector('.wrapper').style.backgroundColor = 'pink';







var area = document.querySelector('#area');
var cell = document.getElementsByClassName('cell');
var currentPlayer = document.getElementById('curplyr');


var player = 'x';
var stat = {
    'x':0,
    'o':0,
    'd':0
}
var winIndex = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
for(var i = 0; i<9; i++){
    area.innerHTML += "<div class = 'cell' pos = "+ i +"></div>"
}

for(var i = 0; i<cell.length; i++){
    cell[i].addEventListener('click', cellClick, false);
}
function cellClick(){
    
    var data = [];
    if(!this.innerHTML){
        
        this.innerHTML = player;
    }else{
        alert('эта ячейка уже заполнена');
        return;
    }
    
    for(var i in cell){
        if(cell[i].innerHTML == player){
            data.push(parseInt(cell[i].getAttribute('pos')));
        }
    }
    console.log(data);
    if(checkWin(data)){
        stat[player]+=1;
        restart(`выиграл: ${player}`);
    }else{
        var draw = true;
        for(var i in cell){
            if(cell[i].innerHTML == '' ) draw = false;
        }
        if(draw){
            stat.d += 1;
            restart('ничья');
        }
    }
    player = player == "x"?"0":"x";
    currentPlayer.innerHTML = player.toUpperCase();
}
function checkWin(data){
    for(var i in winIndex){
        var win=true;
        for(var j in winIndex[i]){
            var id = winIndex[i][j];
            var ind = data.indexOf(id);

            if(ind == -1){
                win = false;
            }
        }
        if(win) return true;
    }
    return false;
}


function restart(text){
    console.log(stat);
    alert(text);
    for(var i=0; i<cell.length;i++){
        cell[i].innerHTML = '';
    }
    updateStat();
}
function updateStat(){
    document.getElementById('sx').innerHTML = stat.x;
    document.getElementById('so').innerHTML = stat.o;
    document.getElementById('sd').innerHTML = stat.d;
}




















