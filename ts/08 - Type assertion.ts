// 类型断言
// 类型断言 (Type Assertion) 可以用来手动指定一个值的类型

{
  const value: any = 'hello world';

  // 'angle-bracket' syntax
  let len: number = (<string>value).length;
  // as syntax
  let len2: number = (value as string).length;
  console.log(len, len2);
}
