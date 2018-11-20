// 元组
// 数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象

{
  // 定义一对值分别为 string 和 number 的元组
  let t: [string, number] = ['yly', 20];
  // 当赋值或访问一个已知索引的元素时，会得到正确的类型
  t[0] = 20; // ❌
  t[0] = 'YLY'; // ⭕
  t[0].toFixed(2); // ❌
  t[0].slice(1); // ⭕

  // 可以只赋值元组中的一项
  let tuple: [string, number];
  tuple[0] = 'yly'; // ⭕

  // 但是当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项
  let tuple2: [string, boolean];
  tuple2 = ['yly']; // ❌
  tuple2 = ['yly', true]; // ⭕

  let tuple3: [number, string[]] = [1]; // ❌
}

{
  // 越界的元素
  // 当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型
  let tuple: [number, string] = [20, 'yly'];
  tuple.push('hello'); // ⭕
  tuple.push(true); // ❌
  // Argument of type 'true' is not assignable to parameter of type 'string | number'
}