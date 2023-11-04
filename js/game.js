let canvas;
let world;
let keyboard = new Keyboard();





function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
   
    
    
}



window.addEventListener('keydown', (e) => {
    if (e.keyCode == 39)  {
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 37)  {
        keyboard.LEFT = true;
    }
    if (e.keyCode == 38)  {
        keyboard.UP = true;
    }
    if (e.keyCode == 40)  {
        keyboard.DOWN = true;
    }
    if (e.keyCode == 32)  {
        keyboard.SPACE = true;
    }
    if (e.keyCode == 70) {
        keyboard.F = true;
    }
});


window.addEventListener('keyup', (e) => {
    if (e.keyCode == 39)  {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 37)  {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 38)  {
        keyboard.UP = false;
    }
    if (e.keyCode == 40)  {
        keyboard.DOWN = false;
    }
    if (e.keyCode == 32)  {
        keyboard.SPACE = false;
    }
    if (e.keyCode == 70) {
        keyboard.F = false;
    }
});

















































// let canvas;
// let ctx;
// let character = new Image();
// let numOfImages = 1;
// let currentFrame = 0;
// let framesDrawn = 0;

// let cols = 6;
// let spriteWidth;
// let spriteHeight;
// let totalFrames = 6;
// let srcX = 0;
// let srcY = 0;

// function init() {

//     canvas = document.getElementById('canvas');
//     canvas.width = 1080;
//     canvas.height = 720;
//     ctx = canvas.getContext('2d');
//     character.src = 'img/charakters/Fire vizard/Walk.png';
//     spriteWidth = character.width / cols;
//     spriteHeight = character.height;
//     loadImages();
// }

// function animateFireWizard() {


//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     requestAnimationFrame(animateFireWizard);
//     currentFrame = currentFrame % totalFrames;
//     srcX = currentFrame * spriteWidth
//     ctx.save();
//     ctx.drawImage(character, srcX, srcY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
//     ctx.restore();
//     framesDrawn++;
//     if (framesDrawn >= 8) {
//         currentFrame++;
//         framesDrawn = 0;
//     }


// }



// function loadImages() {
//     if (--numOfImages > 0) return;
//     animateFireWizard();
// }





