// 声明文件 (Declaration files)
// 当使用第三方库时，我们需要引用它的声明文件

// 声明语句
// 使用 declare 关键字来定义 $ 的类型，帮助 TypeScript 判断我们传入的参数类型对不对
declare var $: (selector: string) => any;
// 使用 $，此时不会报错
$('#foo');

// 通常把类型声明放到一个单独的文件中，这就是声明文件
// something.d.ts
declare var $: (selector: string) => any;
// 在使用到的文件的开头，用「三斜线指令」表示引用了声明文件
// index.ts
/// <reference path='./folder/something.d.ts' />
$('#foo');

// 第三方声明文件
// 推荐使用 @types 来管理，直接用 npm 安装对应的声明模块即可，如
// npm install @types/jquery --save-dev
// 在这里搜索 http://microsoft.github.io/TypeSearch/
