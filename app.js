const character = document.querySelector('#character');
const block = document.querySelector('#block');
const startBtn = document.querySelector('#startBtn');
const restartBtn = document.querySelector('#restartBtn')

alert('press w key to jump !');

startBtn.addEventListener('click', () => {
    block.classList.add('animateBlock');
    window.addEventListener('keydown', (event)=> {
        if(event.key == "w") {
            character.classList.add('animate');
        }
        setTimeout(()=> {
            character.classList.remove("animate");
        },1000)
    })

    const checkDead = setInterval( () => {
        const characterTop = 
        parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    
        const blockLeft = 
        parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    
        if(blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
            block.style.animation = 'none';
            alert('You lost !!!');
            
        }
    }, 10);

    restartBtn.addEventListener('click', () => {
        location.reload();
    })



} );

    



