const dino = document.querySelector(".dino");
const backgroung = document.querySelector(".background")
let jumping = false;
let position = 0;
const botao = document.querySelector(".botao")

function handleKeyDown(event){
    if( event.keyCode === 32){
        if(!jumping){
            jump()
        }        
    }
}

function jump(){

jumping = true;

let upinterval = setInterval(() => {
    if(position >= 150){
        clearInterval(upinterval);

        let downInterval = setInterval(()=> {
            if(position <= 0) {
                clearInterval(downInterval);
                jumping = false;
            }else{
                position -= 10;
                dino.style.bottom = position + "px"
            }
        }, 20)

    }else{
        position +=20;
        dino.style.bottom = position + "px"
    }

    },20) 
}


function createCactus(){
const cactus = document.createElement('div');
let cactusPosition = 1000;
let randomTime = Math.random() * 7000;

cactus.classList.add("cactus");
cactus.style.left = 1500 + "px";
backgroung.appendChild(cactus);

let leftInterval = setInterval(() => {   
    if(cactusPosition < -60){
        clearInterval(leftInterval);
        backgroung.removeChild(cactus);        
    }else if(cactusPosition > 0 && cactusPosition < 100 && position < 100){
        clearInterval(leftInterval);
        document.body.innerHTML ='<h1 class="game-over">Fim de Jogo </h1>'
    
    }else{
        cactusPosition -=10;
        cactus.style.left = cactusPosition + "px";
    }
}, 20);

setTimeout(createCactus, randomTime)
}


createCactus();
document.addEventListener("keyup", handleKeyDown);