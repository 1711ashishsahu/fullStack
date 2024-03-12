function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewStr
    if (views<1000000) {
        viewStr = views/1000 + "K"
    }
    else if (views>1000000) {
        viewStr = views/1000000 + "M"
    }
    else{
        viewStr = views/1000 + "K"
    }
    let html = `<div class="box">
            <div class="image">
                <img src="${thumbnail}" alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h2>${title}</h2>
                <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
            </div>
        </div>`
    document.querySelector(".container").innerHTML = html + document.querySelector(".container").innerHTML
}

createCard("Introduction to Backend | Sigma Web Dev video #2","CodeWithHarry", 560000, 7, "31:22", "https://t4.ftcdn.net/jpg/05/66/05/55/360_F_566055532_TVl1zRxXpTJYVHAq8RwrI2r2LQvu7oN3.jpg")