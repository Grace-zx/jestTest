/**
 * @description: 所有的 mock 函数都有这个特殊的 .mock属性，它保存了关于此函数如何被调用、调用时的返回值的信息。 .mock 属性还追踪每次调用时 this的值，所以我们同样可以也检视（inspect） this
 */

const myMock1 = jest.fn();
const a = new myMock1();
console.log(myMock1.mock.instances); // [ <a> ]

const myMokc2 = jest.fn();
const b = {};
const bound = myMokc2.bind(b);
bound();
console.log(myMokc2.mock.contexts);
// [ <b> ]
