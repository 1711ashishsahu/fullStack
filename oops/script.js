// let obj = {
//     a: 1,
//     b: "Harry"
// }

// console.log(obj);

// let animal = {
//     eats: true
// }
// let rabbit = {
//     jumps: true
// }

// rabbit.__proto__ = animal


class Animal{
    constructor(name){
        this.name = name
        console.log("object is created...");
    }
    eats(){
        console.log("kha raha hoon");
    }
    jumps(){
        console.log("kood raha hoon");
    }
}
class Lion extends Animal{
    constructor(name){
        super(name)
        console.log("object is created and he is a lion...");
    }
    eats(){
        console.log("kha raha hoon roar");
    }
    jumps(){
        console.log("kood raha hoon roar");
    }
}

let a = new Animal("Bunny")
console.log(a);
let l = new Lion("Shera")
console.log(l);