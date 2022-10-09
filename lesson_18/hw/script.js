// 1. исправить ошибки задания 17
// 2. сделать шапку ютюба (svg)
// 3. Задачи:

// 1) Дан объект FamilyTree, выведете в консоль возраст собаки и имя сына.

const FamilyTree = {
   name: "Olga",
   age: 34,
   herSun: {
      name: 'Artemiy',
      age: 10,
      hisDog: {
         name: 'Sharik',
         age: 2
      }
   }
}
console.log(FamilyTree.herSun.hisDog.age);
console.log(FamilyTree.herSun.name);

// 2)
//    а) Создайте переменную и запишите в неё объект, который будет включать по свойсту на каждый примитивный тип.
//    б) Преобразуйте каждое свойство этого объекта в его булевый эквивалент, неявным преобразованием типа
let FamilyInfo = {
   name: 'Nasty',
   age: 4,
   address: false,
   undefined: undefined,
   null: null
}

FamilyInfo.name = !'Nasty';
FamilyInfo.age = 4 < 5;
FamilyInfo.address = false || true;
FamilyInfo.undefined = Boolean(undefined);
FamilyInfo.null = Boolean(null);
console.log(FamilyInfo); 

// 3)
//    а) Создайте переменную и зпишите в неё объект с двумя произвольными свойтсвами
//    б) Создайте вторую переменню и скопируйте в неё объект
//    в) Измените свойство объекта, установленного во второй переменной, не обращаясь ко второй переменной 
let MyHome = {
   city: 'Nadym',
   street: 'Polyarnaya'
}

let FamilyHome = MyHome;

MyHome.city = 'Piter';
MyHome.street = 'Neva';
console.log(FamilyHome);


// ? 4) оздайте переменную и запишите в неё объект с произвольными свойствами и свойством,
//  который должен являться произвольным объектом.
const obj = {
      name: 'Artemiy',
      age: 10,
      sister: {
         name: 'Eva',
         age: 5
      }
};
console.log(obj);
// 5)
//    а) оздайте переменную и запишите в неё массив, который содержит все цвета радуги
//    б) выведите в консоль красный, зелёный и фиеолетовые цвета

const rainbow = ['red', 'orange', 'yelloy', 'green', 'blue', 'purple'];
console.log(rainbow[0]);
console.log(rainbow[3]);
console.log(rainbow[5]);

// 6)
//    а) оздайте переменную и запишите в неё массив, который содержит 4 объекта со свойствми имя и возраст человека.
//    б) выведите в консоль все имена
const peple = [
   {
      name: 'Olga',
      age: 33
   },
   {
      name: 'Artem',
      age: 34
   },
   {
      name: 'Artemyi',
      age: 7
   },
   {
      name:'Anastasia',
      age: 4
   }
];
console.log(peple[0].name);
console.log(peple[1].name);
console.log(peple[2].name);
console.log(peple[3].name);

// 7) а) оздайте переменную и запишите в неё массив, который содержит 3 массива. 1й- список имён, 2й- список возрастов, 3й списко булевых значений
//    б) вывести в консоль второе имя, второй возраст, второе булевое значение в списке.

const arr1 = [
   ['Olga', 'Artem', 'Artemyi'],
   [33, 34, 7],
   [false, true]
];
console.log(arr1[0][1]);
console.log(arr1[1][1]);
console.log(arr1[2][1]);

// 8) Создайте вункцию, которая принимает в качестве аргумента любое значение. И возвращает его булевый эквиволент.
const fu = function (x) {
   return Boolean(x)
}
console.log(fu(2));

// 9) Создайте функцию, которая принимает в качестве аргументов два строковых значения и возвращает их конкатенацию.
const phone = function (x,y) {
   return (x + y)
}
console.log(phone('Samsung', 'Apple'));
// 10) Создайте функцию которая принимает первым аргументом число, а вторым булевое значение.
//  Функция должна вернуть квадрат этого числа, если булевое значенеи true, и корень - если false.
// ыue);

const fu2 = function (x, y) {
   if(!x) {
      return Math.pow(x, 2);
   }
   else {
      return Math.sqrt(x);
   }
}
console.log(fu2(9, false));

// 11) Создайте функцию которая принимает:
//    - первым аргументом любое имя (строка)
//    - вторым аргументом любой возраст (число)
//    - третьим аргументом булевое значение

//    Функция должна возвращать объект со свойствами "name", "age", "isMan"
const fu3 = function (x, y, z) {
   return {
      name: x,
      age: y,
      isMan: z
   }
}
console.log(fu3('Alisa', 44, true));

// ? 12) (Эта задача уже посложнее, использовать не только тело функции) Создайте функцию которая первые 
// три вызова будет выводить в консоль сообщение "Hello world". После третьего ничего не будет выводить
let a = 4;
const hello = function () {
   if( a < 5 ) console.log('Hello world');
   if( a > 3 ) console.log('Hello world');
   if( a == 4 ) console.log('Hello world');
   if( a != 4 ) console.log('Hello world');
}

hello();

// 13) Исправьте функцию так чтобы она возвращала 50
const fu4 = function (x, y) {
   return x/y
}
console.log(fu4(100, 2));

// 14) Создайте функцию которая принимает в качестве аргументов 3 булевых аргумента и 
// возвращает true если все 3 аргумента true, в противном случае функця должна возвращать false
 const fu5 = function (a, b, c) {
if (a||b||c) {
   return true
} else {
   return false
}
}
console.log(fu5(false, true, false));

// 15) Напишите функцию которая принимает  в качестве аргумента любое значение и возвращает тип данного значения (если не помнишь как узнать тип то посмотри в интернете)
const fu6 = function (a) {
   return typeof a
}
console.log(fu6('Hello'));

// ? =16) Напишите функцию которая принимает в качестве аргумента любой объект, 
// и возвращает объект с удалённым свойство "name"

const YouName = function ( 
   obj = {
   name: 'Masha'
})
{
   delete YouName.obj.name
   return YouName.obj.name
};
console.log(YouName.name);