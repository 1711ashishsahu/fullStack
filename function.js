console.log("Hey Ashish you are nice!");

function nice(name){
    console.log("Hey", name, "you are nice!");
    console.log("Hey", name, "you are good!");
    console.log("Hey", name, "you are wow!");
    console.log("Hey", name, "your tshirt is nice!");
    console.log("Hey", name, "you are studing good!");
}

nice("Harry");
nice("rohan");
nice(20);

function sum(a, b){
    console.log("The sum is", a+b);
}
sum(10, 20);
sum("The sum is:", 10, 20);

function add(x, y, z = 5){
    return x+y+z;
}
result1 = add(50, 5);
result2 = add(50, 10);
result3 = add(50, 100, 10);
console.log("The addition is:", result1);
console.log("The addition is:", result2);
console.log("The addition is:", result3);


// Arrow function

const func1 = (a)=>{
    console.log("I am an arrow function", a);
}

func1(22);
func1(24);
func1(2);