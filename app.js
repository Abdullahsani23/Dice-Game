var change =document.getElementById("result")
var img = document.getElementById("img")
var comnt = document.getElementById("comnt")
// console.log(change);
function roll(){
var random =Math.floor(Math.random()*6)+1
console.log(random);
change.innerText = random
 
if(random ===1){
    img.src = "images/1.png"
    comnt.innerText ="ohhoo"
}else if(random === 2){
    img.src = "images/2.png"
    comnt.innerText ="hmmm"
}
else if(random === 3){
    img.src = "images/3.png"
    comnt.innerText ="good try"
}
else if(random === 4){
    img.src = "images/4.png"
    comnt.innerText ="not bad"
}
else if(random === 5){
    img.src = "images/5.png"
    comnt.innerText ="good"
}
else if(random === 6){
    img.src = "images/6.png"
    comnt.innerText ="excellent"
}
else{
    console.log("try again");
}


}


