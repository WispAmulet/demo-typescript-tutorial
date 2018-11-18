// 函数的类型

{
  // 函数声明 (Function Declaration)
  function sum(x, y) {
    return x + y;
  }
  // 函数表达式 (Function Expression)
  let mySum = function (x, y) {
    return x + y;
  }
}

{
  // 加入类型定义，既要对输入定义类型，也要对输出定义类型
  function sum(x: number, y: number): number {
    return x + y;
  }
  sum(1, 2, 3); // ❌
  // Expected 0-2 arguments, but got 3

  let mySum = function (x: number, y: number): number {
    return x + y;
  }
  mySum(1, 2);
  // 可通过编译，但实际上只对等号右侧的匿名函数进行了类型定义
  // mySum 的类型由赋值操作进行类型推断而来

  // 正确的写法。此处的 => 表示函数的定义，左侧为输入的类型，右侧是输出类型
  // 不等同于 ES6 中的箭头函数
  let mySum2: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
  }
  mySum2(1, 2);
}

{
  // 用接口定义函数的形状
  interface SearchFunc {
    (source: string, subString: string): boolean;
  }
  let mySearch: SearchFunc = function(source: string, subString: string) {
    return source.search(subString) !== -1;
  }

  mySearch('hello world', 'world'); // true
}

{
  // 可选参数
  function fullName(firstname: string, lastname?: string) {
    if (lastname) {
      return firstname + ' ' + lastname;
    } else {
      return firstname;
    }
  }

  fullName('hello', 'world'); // 'hello world'
  fullName('hello'); // 'hello'

  // 可选参数必须在必须参数之后
  function getFullName(firstname?: string, lastname: string) { // ❌
    return firstname + lastname;
  }
  // A required parameter cannot follow an optional parameter
}

{
  // 参数默认值
  // ES6 中允许给函数参数添加默认值
  // Typescript 将添加了默认值的参数视为可选参数
  function getFullName2(firstname: string, lastname: string = 'snicker') {
    return firstname + ' ' + lastname;
  }

  getFullName2('hello', 'yly'); // 'hello yly'
  getFullName2('hello'); // 'hello snicker'

  // 这种情况下不受可选参数必须在必须参数之后的限制
  function addNum(first: number = 5, second: number) {
    return first + second;
  }

  addNum(6, 7); // 13
}

{
  // 剩余参数
  // ES6 中可以使用的 ...rest 获得函数的剩余参数，...rest 只能是最后一个参数
  function push(arr: any[], ...items: number[]) {
    items.forEach(function(item) {
      arr.push(item);
    });
  }
  // items 是一个数组，所以它的类型是 number[]

  const arr = [];
  push(arr, 1, 2, 3);
  console.log(arr);
}

{
  // 函数重载
  // 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理
  function reverse(x: string): string; // 函数定义
  function reverse(x: number): number; // 函数定义
  function reverse(something: number | string) { // 函数实现
    if (typeof something === 'number') {
      return Number(something.toString().split('').reverse().join(''));
    } else if (typeof something === 'string') {
      return something.split('').reverse().join('');
    }
  }

  console.log(reverse('hello')); // 'olleh'
  console.log(reverse(12345)); // 54321

  // 注意，TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面
}
