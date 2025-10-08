//Q1
let nickname = 'tom';
let age = 23;
console.log(`私のニックネームは${nickname}です。年齢は${age}歳です。`);

//Q2
let languages = [ 'JavaScript', 'PHP', 'Ruby', 'Python', 'Go' ];

let lang0 = languages[0];
let lang1 = languages[3];
console.log(`私の好きな言語は${lang0}です。次は${lang1}を勉強してみたいです。`);

//Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

//Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1]?.favorites?.[1]);

//Q5
let totalAge = playerList[0].age + playerList[1].age + playerList[2].age;
let averageAge = totalAge / playerList.length;
console.log(`3人の平均年齢は${averageAge}歳です。`);

//Q6
let sayHello = () => {
  console.log("Hello");
};

sayHello();

let sayWorld = () => {
  console.log("World");
};

sayWorld();

//Q7
user.birthdate = '1997/11/22';
user.sayHello = function() {
  console.log("Hello!");
};
user.sayHello();

//Q8
let calc = {
  add: (x, y) => console.log(x + y),
  subtract: (x, y) => console.log(x - y),
  multiply: (x, y) => console.log(x * y),
  divide: (x, y) => console.log(x / y),
};
calc.add(3, 4);       
calc.subtract(20, 10);
calc.multiply(7, 7);
calc.divide(25, 5);

//Q9
function rem(num1, num2) {
  return num1 % num2;
}
let num1 = 5;
let num2 = 3;
let result = rem(num1, num2);
console.log(`${num1} を ${num2} で割った余りは ${result} です。`);

//Q10
// スコープ: 変数が使える場所のこと
// 参照: 変数の中身を見ること
// function foo() {
//   let x = 1; // xはこの関数の中だけで使える
// }
// console.log(x); // エラー: xは見えない

// 理由はconsole.log(x);はfoo関数のスコープの中だけにあるので、外から参照できない
// 正しいコード：
// function foo() {
//   let x = 1;
//   console.log(x); ＝　xはこの関数の中だけで使える
// }
// foo();　// 1と表示される


//Q01
console.log(Math.round(Math.random() * 9));

//Q02
setTimeout(() => console.log("Hello World!"), 3000);

//Q03
let num = 1;

if (num > 0) {
  console.log("numは0より大きいです");
} else if (num < 0) {
  console.log("numは0より小いです");
} else {
  console.log("0です");
}

//Q04
let = numbers = [];
for(let num = 1; num < 100; num++) {
  numbers.push(num);
}
console.log(numbers);

//Q05
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let num = 0; num < mixed.length; num++) {
  let mixedNum = mixed[num];

//   if (typeof mixedNum === "number") {
  if (mixedNum === 0 || mixedNum === 1 || mixedNum === 2 || mixedNum === 3 || mixedNum === 4 || mixedNum === 5 || mixedNum === 6 || mixedNum === 7 || mixedNum === 8 || mixedNum === 9) {
 
    if (mixedNum % 2 === 0) {
      console.log("even");
    } else {
      console.log("odd");
    }
  } else {
    console.log("not number");
  }
}

