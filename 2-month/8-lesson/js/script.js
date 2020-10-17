//for(let i=0; i<30; i++){
  //  console.log(i+1`) FIO: ${arr1[i]}   number: ${arr2[i]}   adress: ${arr3[i]}`);
//}
'use strict';
/*let arr1 = ['apple', 'onion', 'potato'];
let arr2 = [1, 2, 30,5,6,10];
let arr3 = [1, 2, 30,8,6,4,2];
let ARR = [arr1, arr2, arr3];
for(let i=0; i<ARR.length; i++){
  for(let j=0; j<ARR[i].length; j++){
    console.log(ARR[i][j]);
  }
  console.log('sled massiv');
}*/
/*let stuff = [

];
stuff ['fruits'] =  ['apple','orange', 'grape','melon'];
stuff ['veg'] =  ['tomato', 'potato'];
stuff ['animals'] = ['tiger', 'lion', 'puma','wolf'];
console.group('fruits');
for (let index = 0; index < stuff['fruits'].length; index++) {
  console.log(stuff ['fruits'][index]);
}
console.groupEnd();
*/

/*console.log('13 zadaniye');
let f = [1, 3, 0], g = [1,3,5];
for (let index = 0; index < f.length; index++) {
  let element = f[index];
  for(let j=0; j<g.length; j++){
    let qu = g[j];
    if(element<= 1 && qu>= 3 ) console.log('a= ' + index + 'b= ' + j + '     ' + element +qu);
    else console.log('a= ' + index + 'b= ' + j + '     ' + element - qu);
  }
  
}
for (let index = 0; index < f.length; index++) {
  let element = f[index];
  if (element <= 1) {
     for (let j = 0; j < g.length; j++) {
       let qu = g[j];
        if (index == j) {
           if (qu >= 3) console.log(element + qu);
           else console.log(element - qu);
        }
     }
  }
  else console.log(element - g[index]);
}*/

/*let animals = [];
let arr = [];
arr[0] = [
  'dog',
  'cat',
  'monkey',
  'cow'
];
arr[1] = [
  'fnhjfbxm',
  'ijfiogfjb',
  'dijgdigbn'
];
for (let index = 0; index < arr.length; index++) {
  console.group(index);
  for(let i = 0; i<arr[index].length; i++){
    console.log(arr[index][i]);
  }
  console.groupEnd();
}*/
/*)Двоеточие между нечётными числами
Пользователь вводит многозначное число через promt.
  
Напишите функцию colonOdd(num), которая принимает
  число num в качестве аргумента и вставляет двоеточие (:) 
  между двумя нечетными числами. Например, если вводится 
  число 55639217, то на выход должно быть 5:563:921:7.*/
let num = '55639217';
let element = '';
for (let index = 0; index < num.length; index++) {
  if(num[index]%2==1 && num[index+1]%2==1)
   { 
      element = element + num[index] + ':' ;
   }
   else{
     element = element +num[index];
   }
}
console.log(element);

/*2)Удалить повторяющиеся элементы массива
Напишите функцию removeDuplicates(arr), 
которая возвращает массив, в котором удалены 
повторяющиеся элементы из массива arr (игнорируйте
чувствительность к регистру).
*/
num = [1,1,5,8,9,3,3,6,5,1];
for (let index = 1, i=1; index < num.length; index++) {
  if(num[index] !== num[index-1]){
    num[i++] = num[index];
  }
}
console.log(num);

/*3)Високосий год

let godstart = 2013;
let gostend = 2020;

for(){

}*/
let godstart = 2013, godend = 2020;
 element = [];
for (let index = godstart; index < godend; index++) {
  if(index % 4 == 0){
    element = index;
  }
}
console.log(element);


/*5) Сумма элементов двух массивов
Напишите код, который создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.

var arr1 = [1, 2, 3, 4, 5,4];
var arr2 = [4, 5, 6];

ваш код*/

/*for (let index = 0; index < f.length; index++) {
  let element = f[index];
  if (element <= 1) {
     for (let j = 0; j < g.length; j++) {
       let qu = g[j];
        if (index == j) {
           if (qu >= 3) console.log(element + qu);
           else console.log(element - qu);
        }
     }
  }
  else console.log(element - g[index]);
}*/

let arr1 = [1, 2, 3, 4, 5,4];
let arr2 = [4, 5, 6];
let arr3 = [];
for (let index = 0; index < arr1.length; index++) {
  for(let j=0; j<arr2.length; j++){
    if(index==j) arr3[index]= arr1[index] + arr2[j];
  }  
}
console.log(arr3);

/*6)Количество повторяющихся элементов в массиве
Напишите функцию , которая возвращает количество 
повторяющихся элементов в массиве. */
let array = [1,1,5,8,9,3,3,6,5,1]; 
let mashasum = [];
for (let index = 0; index < array.length; index++) {
  let cur = array[index];
  if(array[index]==array[index+1]){
    mashasum[cur] = cur;
  }
 }

 console.log(mashasum.length);
 console.log(mashasum);

