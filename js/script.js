const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    if (!mario.classList.contains('jump')) {
        mario.classList.add('jump');

        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500); // tempo igual ao CSS
    }
}

// Loop de verificação
const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    // colisão
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 150) {
        // parar animação
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        // parar loop
        clearInterval(loop);

        mario.src = './img/game-over.png';
        mario.style.width ='75px'
        mario.style.marginleft = '50px'
       
    }
}, 10);

document.addEventListener('keydown', jump);
