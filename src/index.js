// 22. デフォルト値 =

const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
sayHello();
sayHello("じゃけぇ");
