"use strict";
function randomInteger(min, max) {
   // получить случайное число от (min-0.5) до (max+0.5)
   let rand = min - 0.5 + Math.random() * (max - min + 1);
   return Math.round(rand);
 }
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
      if (element <= 1 && qu >= 3) console.log(element + qu);
      else console.log(element - qu);
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
let arrA = [], arrB = [], el1, el2;
for (let index = 1; index < 13; index++) {
   arrA[index] = index;
   el1 = arrA[index];
   if (el1 > 2 && el1 < 11) {
      for (let j = 5; j < 15; j++) {
         arrB[j] = j;
         el2 = arrB[j];
         if (el2 >= 6 && el2 < 14 && index == j) console.log(el2 + ": Верно");
         else console.log("не верно");
      }
   }
   else console.log("Не верно");
}


console.log("")
console.log("15задание")
for (let num = 1; num < 6; num++) {
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
}
console.log("")
console.log("16задание")
for (let day = 1; day <= 32; day++) {
   if (day <= 10) console.log(day + ": День находиться в 1 декаде месяца");
   else if (day > 10 && day <= 20) console.log(day + ": День находиться во 2 декаде месяца");
   else if (day > 20 && day <= 30) console.log(day + ": День находиться во 3 декаде месяца");
   else if (day == 31) console.log(day + ": Последний день месяца");
   else console.log("Ошибка: В месяе только 31 день");
}

console.log("")
console.log("17задание")
for (let month = 1; month <= 13; month++) {
   if (month <= 2 && month == 12) console.log(month + ": Месяц Зимы");
   else if (month <= 5 && month > 2) console.log(month + ": Месяц Весны");
   else if (month <= 11 && month > 8) console.log(month + ": Месяц Осени");
   else if (month <= 8 && month > 5) console.log(month + ": Месяц Лета");
   else console.log("Ошибка");
}
console.log("")
console.log("18задание")
let str = 'abcde';
if (str[0] == 'a') console.log("да");
else console.log("нет");

console.log("")
console.log("19задание")
let str2 = '12345';
if (str2[0] == 1 || str2[0] == 2 || str2[0] == 3) console.log("да");
else console.log("нет");


 console.log("")
 console.log("20задание")
 let array = [];
 for (let index = 0; index < 3; index++) {
    array[index] =randomInteger(1,100);
    console.log("No elemnt [" + index + "] = " + array[index]);
 }
   let summ1 = array[0] + array[1] + array[2];
   console.log(summ1)

    console.log("")
    console.log("21задание")
for (let index = 0; index < 6; index++) {
   array[index] =randomInteger(1,100);
   console.log("No elemnt [" + index + "] = " + array[index]);
}
   summ1 = array[0] + array[1] + array[2];
   let summ2 = array[3] + array[4] + array[5];
   if (summ1 == summ2) console.log("да");
   else console.log("нет");



