// 声明变量类型
let b: string
b = 'hello'
// b=123

// 如果变量的声明和赋值同时进行,TS可以自动对变量进行类型检测
let c = false
// c = 'aaa'

// 函数形参进行类型声明 函数返回值进行类型声明
function sum(a: number, b: number) :number{
    return a + b;
}
// sum(123,'456',789)
sum(123,456)
let result = sum(123,456)