let arr = [1, 2, 3, 4, 5]
console.log(arr);
arr[0] = 65;
console.log(arr, typeof arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[3]);

console.log(arr.toString());
console.log(arr.join(" and "));

let a = [10, 20, 30, 40, 50, 60]
console.log(a.pop());
console.log(a.push(100));
console.log(a.push("Harry"));
console.log(a.shift());
console.log(a.unshift("Jack"));
console.log(delete a[3]);
console.log(a[3]);
console.log(a);

//concate()
let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [7,8,9]
let concat1 = a1.concat(a2,a3)
console.log(concat1); 

let number = [11,12,13,14,15]

console.log(number.splice(1, 3));
console.log(number);

