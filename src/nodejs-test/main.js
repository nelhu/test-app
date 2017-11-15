// 通过nodejs提供额require获取外部js文件暴露的export对象的引用
// var hello = require('./hello');
// hello.exportedF1();
// console.log(hello.exportedV1);

// 直接获取并实例化封装好外部文件封装好的暴露对象
var Hello = require('./hello');
var hello2 = new Hello();
hello2.setName('nelhu');
hello2.sayHello();