// Create a business name generator by combining list of names

let rand = Math.random()
// first name
if (rand<=0.33){
    first = "Crazy"
}
else if(rand>0.33 && rand<0.66){
    first = "Amazing"
}
else{
    first = "Fire"
}
//second name
if (rand<=0.33){
    second = "Engine"
}
else if(rand>0.33 && rand<0.66){
    second = "Foods"
}
else{
    second = "Garments"
}
// third name
if (rand<=0.33){
    third ="Bros"
}
else if(rand>0.33 && rand<0.66){
    third = "Limited"
}
else{
    third = "Hub"
}

console.log(`${first} ${second} ${third}`)