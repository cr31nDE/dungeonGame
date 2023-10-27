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
    otherDirection = false;
    speedY = 0;
    acceleration = 2;
    start = 0;


    applyGravity() {
        if (this.isAboveGround() || this.speedY > 0) {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
        }
    }


    isAboveGround() {
        return this.y < 323;
    };

    playAnimation(totalFrames) {

        this.currentFrame = this.currentFrame % totalFrames;


        this.srcX = this.currentFrame * this.spriteWidth;
        this.framesDrawn++;
        if (this.framesDrawn >= 10) {
            this.currentFrame++;
            this.framesDrawn = 0;
        }
    }


    playJumpAnimation(minFrame, maxFrame) {
        if (this.start == 0) {
            this.currentFrame = minFrame;
            this.start++;
        }
    
        if (this.currentFrame >= maxFrame) {
            this.currentFrame = minFrame;
        }
        if (this.y < 323) {
            
        }
    
        this.srcX = this.currentFrame * this.spriteWidth;
        this.framesDrawn++;
        
        if (this.framesDrawn >= 12) {
            this.currentFrame++;
            this.framesDrawn = 0;
        }
    }
    loadImg(path) {
        this.img = new Image();
        this.img.src = path;
    }

    findFrame() {
        this.spriteWidth = this.img.width / this.totalFrames;
        this.srcX = this.currentFrame * this.spriteWidth;
    }

    moveRight() {
        
    }

    moveLeft() {

    }

    attack() {

    }


}