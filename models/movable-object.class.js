class MovableObject {
    x = 100;
    y = 323;
    img;
    height = 150;
    spriteWidth;
    spriteHeight;
    currentFrame = 0;
    framesDrawn = 0;
    totalFrames;
    srcX = 0;
    srcY = 0;

    

    loadImg(path) {
        this.img = new Image();
        this.img.src = path;
    }

    findFrame(){
        this.spriteWidth = this.img.width / this.totalFrames;
        this.srcX = this.currentFrame * this.spriteWidth;
    }

    moveRight() {
        console.log('move');
    }

    moveLeft() {

    }

    attack() {

    }


}