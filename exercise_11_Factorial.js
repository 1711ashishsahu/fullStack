// Factorial --> The factorial of a number is the multiplication of all the numbers between one and the number itself.


// let fact = 6
// function factorial(number){
//     let arr = Array.from(Array(number+1).keys())
//     console.log(arr.slice(1,));
//     let c = arr.slice(1,).reduce((a,b)=>{
//         return a*b
//     })
//     console.log(c)
// }

// factorial(fact)
// OR

// let fact = 6
// function factorial(number){
//     let arr = Array.from(Array(number+1).keys())
//     console.log(arr.slice(1,));
//     let c = arr.slice(1,).reduce((a,b)=> a*b)
//     console.log(c);
// }
// factorial(fact)

// using FOR
let facto = 6
function facFor(number){
    let fac = 1
    for (let index = 1; index <= number; index++) {
        fac = fac * index
    }
    return fac
}
console.log(facFor(facto));