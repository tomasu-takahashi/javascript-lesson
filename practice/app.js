// alert('Hello World!');

// console.log('Hello World!');

// console.log('1つ目の値', '2つ目の値');

// let text = 'JavaScriptの練習';
// console.log(text);
// // 以下を追記
// text = 'JavaScriptをマスターした';
// console.log(text);

// // 処理①
// let longText =
//   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
// console.log(longText);
// console.log(longText);
// console.log(longText);

// // 処理②
// console.log(
//   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
// );
// console.log(
//   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
// );
// console.log(
//   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
// );

// let age = 23;
// console.log(age);

// let string = 'JavaScriptの練習';
// console.log(string);

// let single = '文字列型です';
// console.log(single);

// let double = '英語だとstringといいます。';
// console.log(double);

// let name = 'ジョニー';
// let greet = '私は' + name + '！';
// console.log(greet);

// let template = 'テンプレートリテラル'; // ※ これは文字列
// let templateText = `これが${template}です。
// ${template}は改行もできます。`; // これはテンプレートリテラル
// console.log(templateText);

// let num1 = 25;
// let num2 = 2;

// console.log(num1 + num2);

// console.log(num1 - num2);

// console.log(num1 * num2);

// console.log(num1 / num2);

// let number = 5;
// number += 3; // number = number + 3と同じ
// console.log(number);
// // 以下を追記
// number -= 1; // number = number - 1と同じ
// console.log(number);
// number *= 5; // number = number * 5と同じ
// console.log(number);
// number /= 7; // number = number / 7と同じ
// console.log(number);

// let increment = 0;
// console.log(increment);
// increment++; // increment += 1と同じ
// console.log(increment);

// let decrement = 10;
// console.log(decrement);
// decrement--; // decrement -= 1と同じ
// console.log(decrement);

// let bigNum = 25;
// let smallNum = 2;

// console.log(bigNum % smallNum); // 25 / 2 = 12 あまり 1 なので1が表示される

// // 以下を変更
// console.log(bigNum ** smallNum); // 25の2乗なので、25 * 25となり、625が表示される

// let stringNum1 = '25';
// let stringNum2 = '2';

// console.log(stringNum1 + stringNum2);

// let stringNum = '25';
// let numberNum = 2;

// console.log(stringNum + numberNum); // => 252


// let names = ['John', 'Bob', 'Michael', 'Emma'];
// console.log(names);

// let empties = [];

// console.log('names[0] => ', names[0]);
// console.log('names[1] => ', names[1]);
// console.log('names[2] => ', names[2]);
// console.log('names[3] => ', names[3]);
// console.log('names.length => ', names.length);

// let emptyNames = [];

// emptyNames[0] = 'John';
// emptyNames[1] = 'Bob';
// emptyNames[2] = 'Michael';
// emptyNames[3] = 'Emma';
// console.log(emptyNames, emptyNames.length);

// let John = {
//   name: 'John', // key（キー）: value（バリュー）
//   age: 26,
//   bloodType: 'A',
//   favorite: 'card',
// };
// console.log(John.bloodType); // => A

// let one = '1';
// let two = 2;

// console.log('one →', typeof one, one); // one → string 1
// console.log('two →', typeof two, two); // one → number 2

// function getArea() {
//   let radius = 2;
//   let circle = radius * radius * 3.14;
//   console.log('円の面積は' + circle + 'です');
// }

// getArea();  

// function getArea(radius) {
//   let circle = radius * radius * 3.14;
//   return circle;
// }

// console.log('円の面積は' + getArea(5) + 'です');
// console.log('この円の面積はなんと' + getArea(10) + 'でござんす');


// function doFunc(callback) {
//   console.log('doFuncが呼び出されました');
//   callback();
// }

// function output() {
//   console.log('コールバック関数が呼び出されました');
// }

// doFunc(output)

// let John = {
//   name: 'John',  // key（キー）: value（バリュー）
//   age: 26,
//   bloodType: 'A',
//   favorite: 'card',
//   sing: function() {
//     console.log('LA~LA~LA~~~♪');
//   }
// };

// John.sing();

// let tall = 185;
// if (tall >= 180) {
//   console.log('高身長です');
// }

// let val = 26;
// console.log(val >= 20);
// console.log(val === '26');
// console.log(val == '26');
// console.log('hello' === 'world');

let signal = 'red';
if (signal === 'red') {
  console.log('赤信号です。止まりましょう');
} else if (signal === 'blue') {
  console.log('青信号です。進みましょう');
} else if (signal === 'yellow') {
  console.log('黄色信号です。空気を読みましょう');
}

// let myAge = 60;
// if (myAge >= 35) {
//   console.log('健康診断でバリウムを飲みます');
// } else if (myAge >= 20) {
//   console.log('お酒が飲めます');
// } else if (myAge >= 18) {
//   console.log('選挙権があります');
// }

let myAge = 12; // 数字を12に変更
if (myAge >= 35) {
  console.log('健康診断でバリウムを飲みます');
} else if (myAge >= 20) {
  console.log('お酒が飲めます');
} else if (myAge >= 18) {
  console.log('選挙権があります');
} else {
  console.log('子供です');
}

let loto = 8;

if (loto === 7 || loto === 8) {
  console.log('当たり');
} else {
  console.log('ハズレ');
}

let numVal = 8;
let strVal = 'text'

console.log(numVal === 7 || strVal === 'text');

let userA = '到着';
let userB = '不在';

if (userA === '到着' && userB === '到着') {
  console.log('全員揃ったので出発します。');
} else {
  console.log('揃っていないため、出発できません。');
}

let errMsg = '';

// if 文を使った書き方
if (errMsg === '') {
    console.log('ない！');
} else {
    console.log('ある！');
}

// 三項演算子を使った書き方
errMsg === '' ? console.log('ない！') : console.log('ある！');

for (let i = 0; i < 10; i++) {
  console.log(i + '回目のコンソール');
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);