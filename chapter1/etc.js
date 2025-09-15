// 1-3
let i = 0;
const member = {
  [`attr${++i}`]: '佐藤理央',
  [`attr${++i}`]: '女性',
  [`attr${++i}`]: '18歳',
};
// console.log(member);

function greet({ name, age }) {
  // console.log(`こんにちは、私は${name}です、${age}歳です。`);
}
const my = { name: '佐藤理央', age: 18, sex: '女性' };
greet(my);

const str = null;
// console.log(str?.substring(1));

let value = null;
// console.log(value ?? '既定値');
