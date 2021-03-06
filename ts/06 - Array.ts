// 数组的类型
// 在 TypeScript 中，数组类型有多种定义方式，比较灵活

{
  // 「类型 + 方括号」表示法
  // 最简单的方法是使用「类型 + 方括号」来表示数组
  let fibonacci: number[] = [1, 1, 2, 3, 5];
  // 数组的项中不允许出现其他的类型
  let arr: number[] = [1, 'a', 3]; // ❌
  // Type '(string | number)[]' is not assignable to type 'number[]'
  // Type 'string | number' is not assignable to type 'number'
  // Type 'string' is not assignable to type 'number'

  // 数组的一些方法的参数也会根据数组在定义时约定的类型进行限制
  fibonacci.push('yly'); // ❌
  // Argument of type '"yly"' is not assignable to parameter of type 'number'
}

{
  // 数组泛型
  // 也可以使用数组泛型（Array Generic） Array<elemType> 来表示数组
  let fibonacci: Array<number> = [1, 1, 2, 3, 5];
}

{
  // 接口也可以用来描述数组
  interface NumberArray {
    [index: number]: number;
  }
  // NumberArray 表示：只要 index 的类型是 number，那么值的类型必须是 number
  let fibonacci: NumberArray = [1, 1, 2, 3, 5];
}

{
  // any 在数组中的应用
  // 用 any 表示数组中允许出现任意类型
  let list: any[] = ['yly', 20, { link: '@yly' }];
}

{
  // 类数组 (Array-like Object)
  function sum(): any {
    let args: number[] = arguments; // ❌
    // Type 'IArguments' is not assignable to type 'number[]'
    // Property 'push' is missing in type 'IArguments'
  }
  // 常见的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection
  function add(): any {
    let args: IArguments = arguments; // ⭕
  }
}
