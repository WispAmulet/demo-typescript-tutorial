// 联合类型
// 联合类型（Union Types）表示取值可以为多种类型中的一种
{
    var num = void 0;
    num = 7; // ⭕
    num = 'seven'; // ⭕
    // num = true; // ❌
    // Type 'true' is not assignable to type 'string | number'
    // 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法
    function getLength(sth) {
        return sth.length; // ❌
        // Property 'length' does not exist on type 'string | number'
        // Property 'length' does not exist on type 'number'
    }
    function getString(sth) {
        return sth.toString(); // ⭕
    }
    // 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型
    var num2 = void 0;
    num2 = 7; // number
    console.log(num2.length); // ❌
    num2 = 'seven'; // string
    console.log(num2.length); // ⭕
}
