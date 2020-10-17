"use strict";
let a=0;
let b=2;
//#1--------------------
console.log('a==0');
if(a==0){
    console.log('Verno');
} else{
    console.log('Ne verno');
}
//#2----------------------
console.log('a>0');

if(a>0){
    console.log('verno');
} else{
    console.log('ne verno');
}
//#3----------------------
console.log('a<0');

if(a<0){
    console.log('verno');
} else{
    console.log('ne verno');
}
//#4----------------------
console.log('a>=0');

if(a>=0){
    console.log('verno');
} else{
    console.log('ne verno');
}
//#5---------------------
console.log('a<=0');

if(a<=0){
    console.log('verno');
} else{
    console.log('ne verno');
}
//#6----------------------
console.log('a!=0');

if(a!=0){
    console.log('verno');
} else{
    console.log('ne verno');
}
//#7----------------------
console.log("a='test'");
if(a=='test'){
    console.log('verno');
} else{
    console.log('ne verno');
}
//#8----------------------
console.log("a='1' po tipu i znach");
if(a==='1'){
    console.log('verno');
} else{
    console.log('ne verno');
}
//-------------------------работа с логическими переменными-----------------
//#9----------------------
let test=false;

console.log('test=true');
if(test==true){
    console.log('Verno');
} else{
    console.log('Ne verno');
}

if(test) console.log('Verno');
else console.log('Ne verno');

//#10-----------------------
console.log('test!=true');
if(test!=true) console.log('Verno');
else console.log('ne verno');
//-------------------------Работа с && (и) и || (или)-----------------------
//#11-----------------------
console.log('0<a<5');
if(a>0 && a<5){
    console.log('Verno');
} else{
    console.log('ne verno');
}
//#12----------------------
console.log('a==0 || a==2 => a+=7:a/10')
if(a==0 || a==2 ){
    console.log(`Nach znach a=${a}`);
    a+=7;
    console.log(` znach a=${a}`);
} else{
    a=a/10;
    console.log(` znach a=${a}`);
}
//#13------------------------
console.log('a<=1 && b>=3 => a+b:a-b');
console.log(`nach znach a i b= ${a}, ${b}`);
if(a>1 && b<3){
    console.log(`a-b= ${a-b}`);
} else{
    console.log(`a+b= ${a+b}`); 
}
//#14-------------------------
console.log('2<a<11 || 6<b<14 ');
if((a>2 && a<11) || (b>6 && b<14)) console.log('Verno');
else console.log('Ne verno');
//-----------------------------На switch-case--------------------
//#15-------------------------
console.log("Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.");
let num=4;
let def;
switch(num){
    case 1:
         def='winter';
    break;
    case 2:
        def='spring';
    break;
    case 3:
         def='summer';
    break;
    case 4:
         def='autumn';
    break;
    default: 
    console.log('nepravilno nabrano chislo');
}
console.log(def);
//--------------------------Задачи-------------------------------
//#16-----------------------
console.log('#16 zadacha');
let day=25, decade;
if(day>=1 && day<=31){
    if(day>=1 && day<=10){
        decade=1;
    } else if(day>=11 && day<=20){
        deacade=2;
    } else{
        decade=3;
    }
}else {
    console.log('vi vveli chislo vihodyasheye iz  zadannogo intervala');
}
console.log(`эта дата находится в декаде № ${decade} `);
//#17--------------------
console.log('#17 zadacha');
let month=5, season;
switch(true){
    case month>=1 && month<=3  : season='zima';
    break;
    case month>=4 && month<=6  : season='vesna';
    break;
    case month>=7 && month<=9  : season='leto';
    break;
    case month>=10 && month<=12 : season='osen';
    break;
    default: console.log('error number');
}
console.log(season);
//#18------------------
console.log('#18 zadacha');
let str='abcde';
if(str[0]== 'a') console.log("correct");
else console.log('invalid definition');
//#19------------------
console.log('#19 zadacha');
let nums='12345';
if(nums[0]==1 || nums[0]==2 || nums[0]==3) console.log('yes');
else console.log('No');
//#20-----------------
console.log('#20 zadacha');
let nabor='589';
let sum;
sum=parseInt(nabor[0]) + parseInt(nabor[1]) + parseInt(nabor[2]) ;
console.log('summa stroki = '+ sum);
//#21----------------
console.log('#21 zadacha');
let str1='123456';
let sum1, sum2;
sum1= parseInt(str1[0]) + parseInt(str1[1]) + parseInt(str1[2]);
sum2= parseInt(str1[3]) + parseInt(str1[4]) + parseInt(str1[5]);
if(sum1==sum2) console.log('oni ravny');
else console.log('oni ne ravny');
console.log(sum1,  sum2);



