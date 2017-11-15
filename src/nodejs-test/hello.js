var node = "nodejs";

var f1 = function() {
	console.log('hello.js function');
}

function Hello() { 
    var name; 
    this.setName = function(thyName) { 
        name = thyName; 
    }; 
    this.sayHello = function() { 
        console.log('Hello ' + name); 
    }; 
}; 

// 方式一： 把需要暴露给外部的属性和方法封装在nodejs提供的export对象中
// exports.exportedF1 = f1;
// exports.exportedV1 = 'exportedVariable';


// 把需要暴露的属性和方法封装到一个Hello对象中
module.exports = Hello;