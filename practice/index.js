// const.letの変数宣言

// var val1 ="var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// var val1 ="var変数を再宣言";
// console.log(val1);

// let val2 = 'let変数';
// console.log(val2);

// val2 = "let変数を上書き";
// console.log(val2);

// 　letは再宣言不可能
// let val2 = "let変数を再宣言"

// constは上書き、再宣言不可能

const name = 'Java'
const age = 28;

const message1 = '私の名前は' + name + 'です。年齢は' + age + 'です。';
console.log(message1)

// テンプレート文字列
const message2 = `私の名前${name}です。年齢は${age}です。`;
console.log(message2);

//アロー関数

//従来の関数
// function func1(str) {
//   return str;
// }
// console.log(func1('func1です。'))

const func2 = (str) => str;
console.log(func2("func2です。"));

const func3 = (num1, num2) => {
  return num1 + num2
};

console.log(func3(10, 20))

//分割

const myprofile = {
  name: 'jahe',
  age: 29,
};

// const message1 = `名前は${myprofile.name}です。`;
// console.log(message1);

// const { name, age} = myprofile;

// const message2 = `名前は${name}です。`;
// console.log(message2);

//デフォルト

const sayHellow = (name = 'ゲスト') => console.log(`こんにちは${name}`)
sayHellow('っこ')

//スプレッド
const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1)

//まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...num3] = arr2;
console.log(num1);
console.log(num2);
console.log(num3);

//配列のコピー.結合
const arr4 = [10, 20];
const arr5 = [30.40];

const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);
//map やfilterを使った配列の処理

const namuArr = ['田中', '山田', 'ジャカルタ'];
// 　for ( let index = 0; index < namuArr.length; index++) {
//   console.log(namuArr[index]);
// 

//namuArr.map((name) => console.log(name));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 ==== 1;

// })

// 参考演算子

// turuの時

const vall = 1 > 0 ? 'ture' : 'false';
console.log(vall);

const num = '1300';
console.log(num.toLocaleLowerCase());