let canvas;
let ctx;
let character = new Image();





function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    character.src = 'img/charakters/Fire vizard/Walk.png'
    
    

    
    

    setTimeout(function () {
        const spriteWidth = character.width / 6 ;
        const spriteHeight = character.height;
        const x = 0;
        const y = 0;
        ctx.drawImage(character, spriteWidth * 0 , y,spriteWidth, spriteHeight, x, y, 200, 200);
    }, 2000);



}