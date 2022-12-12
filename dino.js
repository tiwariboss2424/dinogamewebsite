const obstacles = document.getElementsByClassName("block");
let image=document.getElementById("dino");
let score=document.getElementById('score');
let x=0;
function jump(){
    image.style.bottom="60px";
    setTimeout(() => {
        score.innerText=x++;
        image.style.bottom="-30px";
    }, 200);
}
window.addEventListener("keydown",jump); 
