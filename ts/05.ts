// 对象的类型--接口
// 在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型

{
  // 在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implements）
  // TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述
  interface Person {
    name: string;
    age: number;
  }

  let tom: Person = { // ⭕
    name: 'Tom',
    age: 25
  };
  // 上面的例子中，我们定义了一个接口 Person，接着定义了一个变量 tom，它的类型是 Person。这样，我们就约束了 tom 的形状必须和接口 Person 一致

  // 定义的变量比接口少了一些属性是不允许的
  let jack: Person = { // ❌
    name: 'Jack'
    // Type '{ name: string; }' is not assignable to type 'Person'
    // Property 'age' is missing in type '{ name: string; }'
  };
  // 多一些属性也是不允许的
  let kait: Person = {
    name: 'Kait',
    age: 18,
    gender: 'female' // ❌
    // Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person'
    // Object literal may only specify known properties
    // and 'gender' does not exist in type 'Person'

    // 可见，赋值的时候，变量的形状必须和接口的形状保持一致
  };
}

{
  // 有时我们希望不要完全匹配一个形状，那么可以用可选属性
  interface Person {
    name: string;
    age?: number;
  }

  let kait: Person = {
    name: 'Kait'
  };
  let jack: Person = {
    name: 'Jack',
    age: 30
  };
  // 这时仍然不允许添加未定义的属性
}

{
  // 有时候我们希望一个接口允许有任意的属性，可以使用如下方式
  interface Person {
    name: string;
    age?: number;
    [propName: string]: any; // [propName: string] 定义了任意属性取 string 类型的值
  }

  let kait: Person = {
    name: 'Kait',
    gender: 'female'
  };

  // 需要注意的是，一旦定义了任意属性，那么确定属性和可选属性都必须是它的子属性
  interface Animal {
    name: string;
    age?: number; // ❌
    [propName: string]: string;
  }
  // Property 'age' of type 'number' is not assignable to string index type 'string'

  let snickers: Animal = {
    name: 'Snickers',
    age: 7,
    gender: 'male'
  };
}

{
  // 有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 readonly 定义只读属性
  interface Person {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
  }

  let kait: Person = {
    id: 9527,
    name: 'Kait',
    gender: 'female'
  };
  kait.id = 1234; // ❌
  // Cannot assign to 'id' because it is a constant or a read-only property

  // 注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
  let jack: Person = { // ❌
    name: 'Jack',
    gender: 'male'
  };
  // Type '{ name: string; gender: string; }' is not assignable to type 'Person'
  // Property 'id' is missing in type '{ name: string; gender: string; }'
  jack.id = 1234; // ❌
  // Cannot assign to 'id' because it is a constant or a read-only property

}
