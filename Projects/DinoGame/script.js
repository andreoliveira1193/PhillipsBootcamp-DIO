const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;
let pontos = 0;
var pontuacao = document.querySelector(".h1");

pontuacao.textContent = `Pontuação: ${pontos}`

function handleKeyUp(event){
    if(event.keyCode === 32){
        if(!isJumping){
        jump();
        }
    }
}

function jump(){
    isJumping = true;

    let upInterval = setInterval(() => {  
        if(position >= 150){
            clearInterval(upInterval);
        
        let downInterval = setInterval(() => {
            if(position <=0){
                clearInterval(downInterval);
                isJumping = false;
            }else{
                position -= 20;
                dino.style.bottom = position + 'px';
            }
        },20);
    } else{   
        position += 20;
        dino.style.bottom = position + 'px';
    }
    
    }, 20);
   
}



function GetPontuation(){
   pontos ++;
   //console.log(pontos); 
   pontuacao.textContent = `Pontuação: ${pontos}`
}

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1200;
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px'
    background.appendChild(cactus);

    let leftInterval = setInterval(() =>  {
        if(cactusPosition < -60){
           clearInterval(leftInterval);
           background.removeChild(cactus);
           GetPontuation(); 
           
        }else if(cactusPosition > 0 && cactusPosition < 60 && position < 60){

            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de Jogo! <br>' +  `Pontuação: ${pontos}` + '</h1>';
         }else{ cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px'
          
        }

    },20);

    setTimeout(createCactus, randomTime);
}

createCactus();
//GetPontuation();

document.addEventListener('keyup', handleKeyUp)
