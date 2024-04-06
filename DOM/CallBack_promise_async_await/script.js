// console.log("Harry is a Hacker");
// console.log("Rohan is a Hecker");

// setTimeout(() => {
//     console.log("I am inside set-timeout");
// }, 2000);
// setTimeout(() => {
//     console.log("I am inside set-timeout1");
// }, 1000);

// console.log("The End");

// callback function
// const roman = (arg)=>{
//     console.log(arg);
// }
// const loadScript = (src, roman) => {
//     let sc = document.createElement("script");
//     sc.src = src;
//     // sc.onload = roman("Roman Ranges")
//     sc.onload = roman("Roman Ranges");
//     document.head.append(sc)
// }

// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", roman)

const fn = () => {
    console.log("Nothing");
}

const callback = (arg, fn) => {
    console.log(arg);
    fn()
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script")
    sc.src = src
    sc.onload = callback("Harry", fn)
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)