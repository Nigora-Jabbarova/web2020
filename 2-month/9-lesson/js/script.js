'use strict';
/*function noDublicate(array){
    let newarr = [];
    let yest;
    for (const parent of array) {
        yest = false;
        for (let child of newarr) {
            if(child==parent){
                yest  = true;
                break;
            }
        }
        if(!yest) newarr[newarr.length] = parent;
    }
    return newarr;
}
console.log(noDublicate([7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 9, 7]));
*/

/*
alert('вам необходимо добавить 3 вида товара по 5 элементов каждый. Например:(фрукты: яблоко, груша, вишня)');
let category;
function addstuff(number){
    if(category ==''){}
    if(number>1) category = prompt('введите следующий тип товара');
    else category = prompt('введите тип товара');
    console.group(number+')' + ' ' + category);
    let array = [];
    let item;
    for (let index = 0; index < 5; index++) {
        item = prompt(`введите товар`);
        array.push(item);
    }
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
    }
    console.groupEnd();
} 
for (let index = 1; index < 4; index++) {
    addstuff(index);
    
}*/

function add_dpoint(array){
    let k=1;
    let str = '';
    for(let element of array){
        if(element%2 != 0 && array[k]%2 !=0 && k != array.length) {
            element += ':';
        }
        str+=element;
        k++;
    }   
    return str;
}
console.log(add_dpoint('55639217'));

/*
2)Удалить повторяющиеся элементы массива
Напишите функцию removeDuplicates(arr),
которая возвращает массив, в котором удалены повторяющиеся
элементы из массива arr (игнорируйте чувствительность к регистру).
*/


function removeDublicates(arr){
    let newarr = [];
    let similar;
    for (let parent of arr) {
        similar = false;
        for(let child of newarr){
            if(child == parent) {
                similar = true;
                break;
            }
        }
        if(!similar){
            newarr[newarr.length] = parent;
        } else continue;
    return newarr;
    }
}
console.log(removeDublicates([1,1,4,3,2,2,6,4,6,8,8,7,5]));


/*
3)Високосий год

let godstart = 2013;
let gostend = 2020;
*/

function year(){
   let start = prompt('vvedite nachalo perioda');
   
}

let godstart = 2013, godend = 2020;
 element = [];
for (let index = godstart; index < godend; index++) {
  if(index % 4 == 0){
    element = index;
  }
}
console.log(element);