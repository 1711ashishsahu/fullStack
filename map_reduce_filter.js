let arr = [1, 13, 5, 7, 11]
// let newarr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)
// }

// map function
let newarr = arr.map(e=>{
    return e**2
})

console.log(newarr);

// filter function
const greaterThanSeven = (z)=>{
    if(z>7){
        return true
    }
    else{
        return false
    }
}
console.log(arr.filter(greaterThanSeven));

// reduce function

let arr2 = [1,2,3,4,5,6]
const redu = (k, l)=>{
    return k*l
}

console.log(arr2.reduce(redu));