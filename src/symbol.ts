
// let a = Symbol();
// let b= Symbol()
// console.log(a===b);


// let s1=Symbol();
// let data={
//     [s1]:"Some data"
// }
// console.log(data[s1])

let demoF1 = Symbol("d1");
class Demo{
    [demoF1]()
    {
        return "some data"
    }
}
let d1 = new Demo();
console.log(d1[demoF1]())