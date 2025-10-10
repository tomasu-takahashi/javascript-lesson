//Q1
let nickname = 'tom';
let age = 23;
console.log('私のニックネームは'+ nickname + 'です。年齢は' + age + '歳です。');

//Q2
let languages = [ 'JavaScript', 'PHP', 'Ruby', 'Python', 'Go' ];

let x = languages[0];
let y = languages[3];
console.log('私の好きな言語は'+ x + 'です。次は' + y + 'を勉強してみたいです。');

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
function calculateAverageAge(players) {
  let totalAge = 0;
  for (let i = 0; i < players.length; i++) {
    totalAge += players[i].age;
  }
  return totalAge / players.length;
}
let averageAge = calculateAverageAge(playerList);
console.log(averageAge);

//Q6
function sayHello() {
  console.log("Hello");
}

sayHello();

function sayWorld() {
  console.log("World");
}

sayWorld();


//Q7
user.birthdate = '2000-09-27';
user.sayHello = function() {
  console.log("Hello!");
};
user.sayHello();

//Q8
let calc = {
  add: function(x, y) {
    console.log(x + y);
  },
  subtract: function(x, y) {
    console.log(x - y);
  },
  multiply: function(x, y) {
    console.log(x * y);
  },
  divide: function(x, y) {
    console.log(x / y);
  },
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
// スコープ: x は foo 関数の中だけで有効
// 参照: 外から x を見ることはできない

// function foo() {
//   let x = 1;
// }
// console.log(x); // エラー: xは見えない


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

  if (typeof mixedNum === "number") {
    if (mixedNum % 2 === 0) {
      console.log("even");
    } else {
      console.log("odd");
    }
  } else {
    console.log("not number");
  }
}

