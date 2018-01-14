// 原始数据类型
// Primitive data types: Boolean, Number, String, Null, Undefined and Symbol

(function (): any {
  // Boolean
  // The most basic datatype is the simple true/false value, which JavaScript and TypeScript call a boolean value.
  let isDone: boolean = true; // ⭕

  // new Boolean() 返回的是一个 Boolean 对象
  // let createdByNewBoolean: boolean = new Boolean(1); // ❌
  // Type 'Boolean' is not assignable to type 'boolean'
  // 'boolean' is a primitive, 'Boolean' is a wrapper object

  // 直接调用 Boolean() 会把任意类型的值转为 boolean 类型
  let createdByBoolean: boolean = Boolean(1); // ⭕

  // new Number() 和 Number()，new String() 和 String() 同上
})()

(function (): any {
  // Number
  // As in JavaScript, all numbers in TypeScript are floating point values. These floating point numbers get the type number. In addition to hexadecimal and decimal literals, TypeScript also supports binary and octal literals introduced in ECMAScript 2015.
  let decimal: number = 6;
  let hexadecimal: number = 0xf00d;
  // ES6
  let binary: number = 0b1010;
  // ES6
  let octal: number = 0o744;
  let notANumber: number = NaN;
  let infinity: number = Infinity;
})()

(function (): any {
  // String
  // As in other languages, we use the type string to refer to these textual datatypes. Just like JavaScript, TypeScript also uses double quotes (") or single quotes (') to surround string data.
  let myName: string = 'yly';
  let myAge: number = 25;
  // ES6
  let sentence: string = `My name is ${myName}. I'm ${myAge} years old.`;
})()

(function (): any {
  // Void
  // Javascript 中没有空值（Vold）的概念，再 Typescript 中，可以用
})()