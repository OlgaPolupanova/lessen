// 1)
let boolTrue = true;
let boolFalse = false;

// 2)
let boolExp = 10 >= 10

// 3) Явное прирощение типов

  // boolean
  let boolX = Boolean(true)

  // string
  let strX = Boolean('string') // true
  let strY = Boolean('') // false

  // number
  let numX = Boolean(10) // true
  let numY = Boolean(0) // false
  let numZ = Boolean(NaN) // false

  // undefined
  let undX = Boolean(undefined) // false

  // null
  let nullX = Boolean(null) // false

// 4) Не явное прирощение типов
  let x = !!10

// 5) условие
// if (true) {
//   alert('Hallo world');
// }

// if (NaN) {
//   alert('is true');
// } else {
//   alert('is false');
// }

// if (!10) {
//   alert('a');
// } else if (!!undefined) {
//   alert('b');
// } else {
//   alert('c');
// }

// let x1 = console.log('test');
// let y1 = alert(10);

// if (true && true) {
//   alert('a');
// }
// if (false || true) {
//   alert('b');
// }


