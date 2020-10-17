"use strict";
function randomInteger(min, max) {
   // получить случайное число от (min-0.5) до (max+0.5)
   let rand = min - 0.5 + Math.random() * (max - min + 1);
   return Math.round(rand);
}
/*
let a = [1, 0, -3];
for (let index = 0; index < a.length; index++) {
   let element = a[index];
   if (element == 0) console.log("Верно");
   else console.log("Неверно");
}

console.log("")
console.log("2задание")
for (let index = 0; index < a.length; index++) {
   let element = a[index];
   if (element > 0) console.log("Верно");
   else console.log("Неверно");
}

console.log("")
console.log("4задание")
for (let index = 0; index < a.length; index++) {
   let element = a[index];
   if (element < 0) console.log("Верно");
   else console.log("Неверно");
}

console.log("")
console.log("4задание")
for (let index = 0; index < a.length; index++) {
   let element = a[index];
   if (element >= 0) console.log("Верно");
   else console.log("Неверно");
}
console.log("")
console.log("5задание")
for (let index = 0; index < a.length; index++) {
   let element = a[index];
   if (element <= 0) console.log("Верно");
   else console.log("Неверно");
}
console.log("")
console.log("6задание")
for (let index = 0; index < a.length; index++) {
   let element = a[index];
   if (element != 0) console.log("Верно");
   else console.log("Неверно");
}
let b = ["test", "тест", "3"];
console.log("")
console.log("7задание")
for (let index = 0; index < b.length; index++) {
   let element = b[index];
   if (element == "test") console.log("Верно");
   else console.log("Неверно");
}

let d = ["1", 1, 3];
console.log("")
console.log("8задание")
for (let index = 0; index < d.length; index++) {
   let element = d[index];
   if (element === "1") console.log("Верно");
   else console.log("Неверно");
}

let test = [true, false];
console.log("")
console.log("9задание")
for (let index = 0; index < test.length; index++) {
   let element = test[index];
   if (element == true) console.log("Верно");
   else console.log("Неверно");
}

console.log("")
console.log("10задание")
for (let index = 0; index < d.length; index++) {
   let element = d[index];
   if (element != true) console.log("Верно");
   else console.log("Неверно");
}

let e = [5, 0, -3, 2]
console.log("")
console.log("11задание")
for (let index = 0; index < e.length; index++) {
   let element = e[index];
   if (element > 0 && element < 5) console.log("Верно");
   else console.log("Неверно");
}

console.log("")
console.log("12задание")
for (let index = 0; index < e.length; index++) {
   let element = e[index];
   if (element == 0 || element == 2) console.log(element + 7);
   else console.log(element / 10);
}

console.log("")
console.log("13задание если с каждым")
let f = [1, 3, 0], g = [1, 3, 5];
for (let index = 0; index < f.length; index++) {
   let element = f[index];
   for (let j = 0; j < g.length; j++) {
      let qu = g[j];
      if (element <= 1 && qu >= 3) console.log("a=" + index + "b=" + j + "    " + element + qu);
      else console.log("a=" + index + "b=" + j + "     " + element - qu);
   }
}
let qu
console.log("")
console.log("13задание если по индексу")
for (let index = 0; index < f.length; index++) {
   let element = f[index];
   if (element <= 1) {
      for (let j = 0; j < g.length; j++) {
         qu = g[j];
         if (index == j) {
            if (qu >= 3) console.log(element + qu);
            else console.log(element - qu);
         }
      }
   }
   else console.log(element - g[index]);
}


console.log("")
console.log("14задание")
let a1 = 14, b1 = 18;
if (a1 > 2 && a1 < 11 && b1 >= 6 && b1 < 14) console.log("Верно");
else console.log("не верно");
console.log("Проверка")
a1 = 6; b1 = 8;
if (a1 > 2 && a1 < 11 && b1 >= 6 && b1 < 14) console.log("Верно");
else console.log("не верно");


console.log("")
console.log("15задание")
let num = 1;
 
   switch (num) {
      case 1:
         console.log("Зима");
         break;
      case 2:
         console.log("Весна");
         break;
      case 3:
         console.log("Лето");
         break;
      case 4:
         console.log("Осень");
      default:
         console.log("Такого времени года не существует");
   }
   console.log("Проверка")
   num = 4;
   switch (num) {
      case 1:
         console.log("Зима");
         break;
      case 2:
         console.log("Весна");
         break;
      case 3:
         console.log("Лето");
         break;
      case 4:
         console.log("Осень");
      default:
         console.log("Такого времени года не существует");
   }

console.log("")
console.log("16задание")
let day = 15;
   if (day <= 10) console.log(day + ": День находиться в 1 декаде месяца");
   else if (day > 10 && day <= 20) console.log(day + ": День находиться во 2 декаде месяца");
   else if (day > 20 && day <= 30) console.log(day + ": День находиться во 3 декаде месяца");
   else if (day == 31) console.log(day + ": Последний день месяца");
   else console.log("Ошибка: В месяе только 31 день");
   day = 1;
   if (day <= 10) console.log(day + ": День находиться в 1 декаде месяца");
   else if (day > 10 && day <= 20) console.log(day + ": День находиться во 2 декаде месяца");
   else if (day > 20 && day <= 30) console.log(day + ": День находиться во 3 декаде месяца");
   else if (day == 31) console.log(day + ": Последний день месяца");
   else console.log("Ошибка: В месяе только 31 день");


console.log("")
console.log("17задание")
let month = 1
   if (month <= 2 && month == 12) console.log(month + ": Месяц Зимы");
   else if (month <= 5 && month > 2) console.log(month + ": Месяц Весны");
   else if (month <= 11 && month > 8) console.log(month + ": Месяц Осени");
   else if (month <= 8 && month > 5) console.log(month + ": Месяц Лета");
   else console.log("Ошибка");
   month = 15
   if (month <= 2 && month == 12) console.log(month + ": Месяц Зимы");
   else if (month <= 5 && month > 2) console.log(month + ": Месяц Весны");
   else if (month <= 11 && month > 8) console.log(month + ": Месяц Осени");
   else if (month <= 8 && month > 5) console.log(month + ": Месяц Лета");
   else console.log("Ошибка");

console.log("")
console.log("18задание")
let str = 'abcde';
if (str[0] == 'a') console.log("да");
else console.log("нет");

let str4 = "456978";
let s1 = str4[0] + str4[1] + str4[2];
let s2 = str4[3] + str4[4] + str4[5];
if (s1 == s2) console.log("да");
else console.log("нет");
str4 = "123123";
s1 = str4[0] + str4[1] + str4[2];
s2 = str4[3] + str4[4] + str4[5];
if (s1 == s2) console.log("да");
else console.log("нет");

str4 = "123";
s1 = str4[0] + str4[1] + str4[2];
console.log(s1);*/
/*

let str = ["Nigora", "Bella", "Farangiz"];
for (let index = 0; index < str.length; index++) {
   console.log(str[index]);

}
let Animals = [];
let array = []

array[0] = [
   "Dog",
   "Cat",
   "Monkey",
   "Cow"
]
array[1] = [
   "edjnewn",
   "fefkne",
   "flerkfj",
   "Ccdfkf"
]
for (let index = 0; index < array.length; index++) {
   console.group(index)
   for (let i = 0; i < array[index].length; i++) {
      console.log(array[index][i]);
   }
   console.groupEnd()
}
*//*
Двоеточие между нечётными числами
Пользователь вводит многозначное число через promt. 
Напишите функцию colonOdd(num), которая принимает число num 
в качестве аргумента и вставляет двоеточие (:) между двумя
нечетными числами. Например, если вводится число 55639217, 
то на выход должно быть 5:563:921:7.*/
let num = "55639217";
let element = "";
for (let index = 0; index < num.length; index++) {
   if (num[index] % 2 == 1 && num[index + 1] % 2 == 1) {
      element = element + num[index] + ':';
   }
   else element = element + num[index];
}
console.log(element)
/*Удалить повторяющиеся элементы массива Напишите функцию 
removeDuplicates(arr), которая возвращает массив, в котором удалены
повторяющиеся элементы из массива arr (игнорируйте чувствительность
к регистру).*/

console.log(num);


let array = ["кришна", "кришна", "харе", "харе",
   "харе", "харе", "кришна", "кришна", ":-O"
];
for (let index = 0; index < array.length; index++) {
   {
      for (let i = index + 1; i < array.length; i++)
         if (array[index] === array[i]) {
            delete array[i];
         }
   }
}
console.log(array);
array = [1, 5, 1, 5, 8, 9, 4]
for (let index = 0; index < array.length; index++) {
   {
      for (let i = index + 1; i < array.length; i++)
         if (array[index] === array[i]) {
            delete array[i];
         }
   }
}
console.log(array);

console.log('');
let godstart = 2013;
let gotend = 2020;

for (let index = godstart; index <= gotend; index++) {
   if (index % 4 == 0) console.log(index)
}

/* Сумма элементов двух массивов
Напишите код, который создаёт массив элементов 
представляющих собой сумму соответствующих 
элементов заданных массивов.
ваш код*/
console.log("")
var arr1 = [1, 2, 3, 4, 5, 4];
var arr2 = [4, 5, 6];

let sum = [];
for (let i = 0; i < arr1.length; i++) {
   for (let j = 0; j < arr2.length; j++) {
      if (i == j) sum[i] = arr1[i] + arr2[j];
   }
}

console.log(sum)
console.log("")
/*Количество повторяющихся элементов в массиве
Напишите функцию , которая возвращает количество
повторяющихся элементов в массиве.*/
let o, array2 = [], i;
let array = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
for (i = array.length; i--;) {
   o = array[i];
   if (array2[o]) array2[o] += 1;
   else array2[o] = 1;
   console.log(array[i] + "  " + i + "  " + o + "  " + array2[o])
}
let k = 0;
for (var key in array2) {
   if (key !== "" || key != 0 || key !== null || key != undefined || key != Nan) k += 1
}
console.log("Кооличество повторяющизся элементов = " + k)
console.log("")


/*7) 
Объединить два массива без дублирования элементов
Напишите функцию union, которая возвращает массив состоящий 
только из уникальных элементов из каждого массива.*/

let array1 = [5, 2, 1, -10, 8];
array2 = [5, 2, 1, -9, 3, 7];
let array3 = array1;
for (let index = 0; index < array2.length; index++) {
   array3[array3.length] = array2[index]
}
console.log(array3);
for (let index = 0; index < array3.length; index++) {
   {
      for (let i = index + 1; i < array3.length; i++)
         if (array3[index] === array3[i]) {
            delete array3[i]
         }
   }
}

console.log(array3);

/*9) Сортировка массива по убыванию
Напишите функцию, которая возвращает массив, 
элементы которого отсортированы по убыванию их значений.*/

array = [3, 8, 7, 6, 5, -4, 3, 2, 1];
console.log(array)
for (let i = 0; i < array.length; i++) {
   for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
         let temp = array[j];
         array[j] = array[j + 1];
         array[j + 1] = temp;
      }
   }
}
console.log("")
console.log(array)

/*10)
Наиболее часто используемый элемент массива
Напишите код, который находит наиболее часто используемый
элемент массива.
*/
let arr = [7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 9, 7];
let map = {};
let mostFrequentElement = arr[0];
for (i = 0; i < arr.length; i++) {
   if (!map[arr[i]]) {
      map[arr[i]] = 1;
   } else {
      ++map[arr[i]];
      if (map[arr[i]] > map[mostFrequentElement]) {
         mostFrequentElement = arr[i];
      }
   }
}
console.log((mostFrequentElement));

/*
11)Удаление ложных значений из массива*/
array = [NaN, 0, 77, false, -17, '', undefined, 99, null];
for (let index = 0; index < array.length; index++) {
   if (array[index] === NaN || array[index] === false || array[index] === undefined || array[index] === null || array[index] === '') delete array[index];
}
console.log(array)
/*
12) устно Удалить определенный элемент из массива*/
array = [NaN, 0, 77, false, -17, '', undefined, 99, null];
let p = 0;
for (let index = 0; index < array.length; index++) {
   if (array[index] == p) delete array[index];
}
console.log(array)