// 原始数据类型
// Primitive data types: Boolean, Number, String, Null, Undefined and Symbol
(function () {
    // Boolean
    // The most basic datatype is the simple true/false value, which JavaScript and TypeScript call a boolean value.
    var isDone = true; // ⭕
    // new Boolean() 返回的是一个 Boolean 对象
    // let createdByNewBoolean: boolean = new Boolean(1); // ❌
    // Type 'Boolean' is not assignable to type 'boolean'
    // 'boolean' is a primitive, 'Boolean' is a wrapper object
    // 直接调用 Boolean() 会把任意类型的值转为 boolean 类型
    var createdByBoolean = Boolean(1); // ⭕
    // new Number() 和 Number()，new String() 和 String() 同上
})()(function () {
    // Number
    // As in JavaScript, all numbers in TypeScript are floating point values. These floating point numbers get the type number. In addition to hexadecimal and decimal literals, TypeScript also supports binary and octal literals introduced in ECMAScript 2015.
    var decimal = 6;
    var hexadecimal = 0xf00d;
    // ES6
    var binary = 10;
    // ES6
    var octal = 484;
    var notANumber = NaN;
    var infinity = Infinity;
})()(function () {
    // String
    // As in other languages, we use the type string to refer to these textual datatypes. Just like JavaScript, TypeScript also uses double quotes (") or single quotes (') to surround string data.
    var myName = 'yly';
    var myAge = 25;
    var sentence = "My name is " + myName + ". I'm " + myAge + " years old.";
})();
