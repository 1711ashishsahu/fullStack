console.log("I am a turtorial on loops")

// for loop
let a = 1;
for (let i = a; i < 5; i++){
    console.log(i);
}
console.log("************");
for (let i = 0; i < 5; i++){
    // console.log(i+a);
    console.log(a+i);
}

let obj = {
    name: "Ashish",
    role: "Developer",
    company: "Ashish Dev"
}
for (const key in obj) {
    // const element = obj[key];
    // console.log(key, ":", element);
    console.log(key);
}

for (const c of "Harry") {
    console.log(c);
}
console.log("+++++++++++++++++++++++");
// while loop
let x = 0;
while (x<6) {
    console.log(x);
    x++;
}

console.log("+++++++++++++++++++++++");
// do-while loop
let y = 10;
do {
    console.log(y);
    y++;
} while (y<6);