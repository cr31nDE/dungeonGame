class MovableObject {
    x = 100;
    y = 100;
    img;
    height = 150;
    spriteWidth;
    spriteHeight;
    totalFrames = 6;
    srcX = 0;
    srcY = 0;
    

    loadImg(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log('move');
    }

    moveLeft() {

    }

    attack() {

    }


}