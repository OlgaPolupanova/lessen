// ссылочные типы

// 1) Объекты
const obj = {
  name: 'Kolya',
  age: 20,
  isMan: true,
  config: {
    r: 120,
    g: 240,
    b: 0
  }
};

// 2) Массивы
const arr1 = ['red', 'green', 'blue']
const arr2 = [
  {
    name: 'kolya'
  },
  {
    name: 'Olya'
  },
  {
    name: 'Kolya',
    age: 20,
    isMan: true,
    config: {
      r: 120,
      g: 240,
      b: 0
    }
  }
];

// 3) Функции
const fu = function () {
  let x = 100;
  let y = 200;
  let z = 300;
  const result = x - y + z;
  console.log(result);
}

const obj3  = {
  o: {},
  arr: [],
  fu: function () {
  
  }
}

const getCompare = function (x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

const result = getCompare(10, 12);
const result2 = getCompare(100, 1);

