console.log("This is Promises");

// let prom1 = new Promise((resolve, reject)=>{
//     let rand = Math.floor(Math.random()*10);
//     if(rand<5){
//         reject("No random number was not supporting you")
//     }
//     else{
//         setTimeout(()=>{
//             console.log("Yes I am done");
//             resolve("Harry")
//         },3000)
//     }   
// }).then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })


let prom1 = new Promise((resolve, reject)=>{
    let rand = Math.floor(Math.random()*10);
    if(rand<5){
        reject("No random number was not supporting you")
    }
    else{
        setTimeout(()=>{
            console.log("Yes I am done");
            resolve("Harry")
        },3000)
    }
})

let prom2 = new Promise((resolve, reject)=>{
    let rand = Math.floor(Math.random()*10);
    if(rand<5){
        reject("No random number was not supporting you 2")
    }
    else{
        setTimeout(()=>{
            console.log("Yes I am done 2");
            resolve("Harry 2")
        },2000)
    }
})

let p3 = Promise.allSettled([prom1, prom2])
p3.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})
