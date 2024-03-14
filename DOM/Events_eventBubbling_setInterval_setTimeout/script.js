let button = document.getElementById("btn")

button.addEventListener("dblclick", ()=>{
    // alert("I was clicked. Yayy!!")
    document.querySelector(".box").innerHTML = "<i><b>Yayy you were clicked</b></i>"
})

button.addEventListener("contextmenu", ()=>{
    alert("Don't right click")
})

document.addEventListener("keydown", (e)=>{
    console.log(e);
})