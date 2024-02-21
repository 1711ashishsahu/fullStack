console.log("Ashish");

// let boxes = document.getElementsByClassName("box")
// console.log(boxes);

// boxes[2].style.backgroundColor = "red"

document.getElementById("red").style.backgroundColor = "red"
// document.querySelector(".box").style.backgroundColor = "green"  ==> this one don't work

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green"
})