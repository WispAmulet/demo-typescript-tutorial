// 任意值
// 任意值（Any）用来表示允许赋值为任意类型

{
  // 对于普通类型，在赋值过程中改变类型是不被允许的
  let num: string = 'seven';
  // num = 7; // ❌
  // Type '7' is not assignable to type 'string'

  // 而 Any 类型被允许赋值为任意类型
  let num2: any = 'seven';
  num2 = 7; // ⭕

  // 在任意值上访问任何属性都是允许的
  let anyThing: any = 'hello!';
  console.log(anyThing.myName);
  console.log(anyThing.myName.firstName);
  // 也允许调用任何方法
  anyThing.setName('yly');
  anyThing.setName('yly').sayHello();
  anyThing.myName.setFirstName('yly');
  // 可以认为，声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值

  // 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型
  let something; // === let something: any;
  something = 'seven';
  something = 7;
  something.setName('yly');
}
