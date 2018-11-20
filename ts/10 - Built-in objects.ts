// 内置对象
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

// JavaScript 中有很多内置对象，它们可以直接在 TypeScript 中当做定义好了的类型
// 内置对象是指根据标准在全局作用域（Global）上存在的对象。这里的标准是指 ECMAScript 和其他环境（比如 DOM）的标准

{
  // ECMAScript 的内置对象
  // Boolean、Error、Date、RegExp 等
  let b: Boolean = new Boolean(1);
  let e: Error = new Error('Error occurred!');
  let d: Date = new Date();
  let r: RegExp = /[a-z]/;
}

{
  // DOM 和 BOM 的内置对象
  // Document、HTMLElement、Event、NodeList 等
  let body: HTMLElement = document.body;
  let div: NodeList = document.querySelectorAll('div');
  document.addEventListener('click', (e: MouseEvent) => {
    // do something
  })
}

{
  // TypeScript 核心库的定义文件
  // https://github.com/Microsoft/TypeScript/tree/master/src/lib

  // TypeScript 核心库的定义文件中定义了所有浏览器环境需要用到的类型，并且是预置在 TypeScript 中的

  Math.pow(10); // ❌
  // Typescript 中 Math.pow() 的类型定义
  interface Math {
  /**
    * Returns the value of a base expression taken to a specified power.
    * @param x The base value of the expression.
    * @param y The exponent value of the expression.
    */
    pow(x: number, y: number): number;
  }

  document.addEventListener('click', (e) => {
    console.log(e.targetCurrent); // ❌
    // Property 'targetCurrent' does not exist on type 'MouseEvent'
  })
  // e 的类型被推断为 MouseEvent，它没有 targetCurrent 这个属性
}

{
  // 用 TypeScript 写 Node.js
  // Node.js 不是内置对象的一部分，如果想用 TypeScript 写 Node.js，则需要引入第三方声明文件
  // npm install @types/node --save-dev
}
