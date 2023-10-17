let canvas;
let ctx;
let character = new Image();
let numOfImages = 1;
let currentFrame = 0;
let framesDrawn = 0;

let cols = 14;
let spriteWidth;
let spriteHeight;
let totalFrames = 14;
let srcX = 0;
let srcY = 0;

function init() {

    canvas = document.getElementById('canvas');
    canvas.width = 1080;
    canvas.height = 720;
    ctx = canvas.getContext('2d');
    character.src = 'img/charakters/Fire vizard/Flame_jet.png';
    spriteWidth = character.width / cols;
    spriteHeight = character.height;
    loadImages();
}

function animateFireWizard() {


    ctx.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(animateFireWizard);
    currentFrame = currentFrame % totalFrames;
    srcX = currentFrame * spriteWidth
    ctx.save();
    resizeImage();
    ctx.drawImage(character, srcX, srcY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    ctx.restore();
    framesDrawn++;
    if (framesDrawn >= 8) {
        currentFrame++;
        framesDrawn = 0;
    }


}

function resizeImage() {
    let scaleFactor = 2;
    let midXPos = 1080 / 2 - (spriteWidth * scaleFactor) / 2;
    let midYPos = 720 / 2 - (spriteHeight * scaleFactor) / 2;
    ctx.translate(midXPos, midYPos);
    ctx.scale(scaleFactor, scaleFactor);
}

function loadImages() {
    if (--numOfImages > 0) return;
    animateFireWizard();
}





