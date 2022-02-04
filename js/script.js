
const CONTENT = document.querySelector('#content');

function updateTime (){
    let d = new Date();
    let second = d.getSeconds();
    let time = d.toLocaleTimeString("fr");
    if (second%3===0){
       CONTENT.style.color= "red";
       CONTENT.style.fontweight="bold";
    } else{
        CONTENT.style.color= "blue";
        CONTENT.style.fontweight="normal";
    }

    CONTENT.innerText = time;
}
setInterval(updateTime, 1000);

window.addEventListener('load', updateTime());