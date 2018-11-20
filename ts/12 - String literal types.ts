// 字符串字面量类型
// 字符串字面量类型用来约束取值只能是某几个字符串中的一个

type EventNames = 'click' | 'scroll' | 'mousemove';

function handleEvent(el: Element, event: EventNames) {
  // do something!
}

handleEvent(document.querySelector('div'), 'click'); // ⭕
handleEvent(document.querySelector('div'), 'hover'); // ❌
// Argument of type '"hover"' is not assignable to parameter of type 'EventNames'

// 类型别名与字符串字面量类型都是使用 type 进行定义