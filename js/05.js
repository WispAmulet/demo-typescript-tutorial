// 对象的类型--接口
// 在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型
{
    var tom = {
        name: 'Tom',
        age: 25
    };
    // 上面的例子中，我们定义了一个接口 Person，接着定义了一个变量 tom，它的类型是 Person。这样，我们就约束了 tom 的形状必须和接口 Person 一致
    // 定义的变量比接口少了一些属性是不允许的
    var jack = {
        name: 'Jack'
        // Type '{ name: string; }' is not assignable to type 'Person'
        // Property 'age' is missing in type '{ name: string; }'
    };
    // 多一些属性也是不允许的
    var kait = {
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
    var kait = {
        name: 'Kait'
    };
    var jack = {
        name: 'Jack',
        age: 30
    };
    // 这时仍然不允许添加未定义的属性
}
{
    var kait = {
        name: 'Kait',
        gender: 'female'
    };
    // Property 'age' of type 'number' is not assignable to string index type 'string'
    var snickers = {
        name: 'Snickers',
        age: 7,
        gender: 'male'
    };
}
{
    var kait = {
        id: 9527,
        name: 'Kait',
        gender: 'female'
    };
    kait.id = 1234; // ❌
    // Cannot assign to 'id' because it is a constant or a read-only property
    // 注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
    var jack = {
        name: 'Jack',
        gender: 'male'
    };
    // Type '{ name: string; gender: string; }' is not assignable to type 'Person'
    // Property 'id' is missing in type '{ name: string; gender: string; }'
    jack.id = 1234; // ❌
    // Cannot assign to 'id' because it is a constant or a read-only property
}
