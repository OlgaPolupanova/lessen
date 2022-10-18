// 1) написать функцию которая возвращает любое число
const num = function (number) {
   return number
}
console.log(num(7));

// 2) написать функцию которая принмает строку и выводит её в консоль
const str = function (string) {
   console.log(string);
}
str("Hi");

// 3) написать функцию которая принмает два числа и выводит в консоль их разность
const dif = function (x, y) {
   console.log(x + y);
}
dif(1, 9);

// 4) написать функцию которая принмает объект и возвращает этот объект с новым свойстом "age" равным числу
const fu = function (obj) {
   return obj
}
const obj = {
   age: 8
}
console.log(obj)

// 5) написать функцию которая выводит в консоль текст "hello world" и возвращает данный текст
const fu5 = function (x) {
   console.log(x);
   return x
}
console.log(fu5("hello world"));

// 6) написать функцию которая принимает два числа и возвращает большее из них
const fu6 = function (x, y) {
   return Math.max(x, y)
}
console.log(fu6(100, 200));

// 7) написать функцию которая принимает два числа и возвращает меньшее из них
const fu7 = function (x, y) {
   return Math.min(x, y)
}
console.log(fu7(100, 200));

// 8) написать функцию которая принимает два числа и возвращает true если эти два числа равны
const fu8 = function (x, y) {
   return x == y
}
console.log(fu8(300, 300));

// 9) написать функцию которая принимает три значения любого типа и возвращает true если булевый эквивалент всех этих значений равен true
const fu9 = function (a, b, c) {
   return a || b || c
}
console.log(fu9(true, false, false));

// 10) написать функцию которая принимает число и возвращает произведение этого числа на два
const fu10 = function (x) {
   return x * 2
}
console.log(fu10(20));

// ? 11) написать функцию которая принимает число и возвращает true если оно делится на два без остатка
const fu11 = function (x) {
   if (x % 2) {
      return true
   }
}
console.log(fu11(8));
// ? 12) написать функцию которая принимает число и возвращает true если оно делится на три без остатка
const fu12 = function (x) {
   if (x % 3) {
      return true
   }
}
console.log(fu12(8));
// 13) написать функцию которая принимает текст и возвращает его с восклицательным знаком на конце
const fu13 = function (x) {
   return x + "!"
}
console.log(fu13("Sorry"));

// 14) написать функцию которая принимает значение любого типа и возвращает его булевый эквивалент (использовать явное приведение типа)
function bool(x) {
   return Boolean(x)
}
console.log(bool(99));

// 15) написать функцию которая принимает значение любого типа и возвращает его булевый эквивалент (использовать не явное приведение типа)
function bool1(x) {
   return !x
}
console.log(bool1(0));

// 16) написать цикл который выводит в консоль числа от 0 до 10
for (var x = 0; x < 11; x++) {
   console.log(x);
}
// 17) написать цикл который выводит в консоль числа от 20 до 5
for (var x = 20; x > 4; x--) {
   console.log(x);
}
// 18) написать цикл который выводит в консоль те числа которые делятся на три без остатка от 0 до 100
for (var x = 0; x < 100; x = x + 3) {
   console.log(x);
}
// 19) написать цикл который выводит в консоль все значения произвольного массива
const avto = ["BMW", "VOLVO", "FORD"]

for (var x = 0; x < avto.length; x++) {
   avto[x]
}
console.log(avto);