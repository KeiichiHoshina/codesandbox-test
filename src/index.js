// 19. テンプレート文字列 ``

const name = "じゃけぇ";
const age = "28";

const message1 =
  "私の名前は" + name + "です。年齢は" + age + "です。（その１）";
console.log(message1);

const message2 = `私の名前は${name}です。年齢は${age}です。（その２）`;
console.log(message2);
