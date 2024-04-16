/* Create a faulty calculator using javascript


This faulty calculator does following:
1) It takes two numbers as input from the user
2) It performs wrong operations as follows:
+ ---> -
* ---> +
- ---> /
/ ---> **

note --> It performs wrong operations 50% of the times
*/

let firstNum = prompt("First number:")
let operation = prompt("Enter Operation")
let secondNum = prompt("Second number:")
let random = Math.random()
console.log(random);
let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

if (random>0.5) {
    console.log(`The result is ${eval(`${firstNum} ${operation} ${secondNum}`)}`);
    alert(`The result is ${eval(`${firstNum} ${operation} ${secondNum}`)}`);
}
else{
    operation = obj[operation]
    alert(`The result is ${eval(`${firstNum} ${operation} ${secondNum}`)}`);
}
