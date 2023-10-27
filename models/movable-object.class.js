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


    draw(ctx){
        ctx.drawImage(this.img, this.srcX, this.srcY, this.spriteWidth, this.img.height, this.x, this.y, this.spriteWidth * 1.5, this.img.height * 1.5);
      
    }

    isColliding(obj) {
        const thisX = this.x + 60 ; // Aktuelle X-Position des Character
        const thisY = this.y * 1.28; // Aktuelle Y-Position des Characters
        const thisWidth = this.spriteWidth * 0.22; // Aktuelle Breite des Characters
        const thisHeight = this.img.height; // Aktuelle Höhe des Characters
    
        const objX = obj.x  + 75; // Aktuelle X-Position des Objekts
        const objY = obj.y * 1.28; // Aktuelle Y-Position des Objekts
        const objWidth = obj.spriteWidth * 0.28; // Aktuelle Breite des Objekts
        const objHeight = obj.img.height; // Aktuelle Höhe des Objekts
    
        // Überprüfe die Kollision zwischen dem aktuellen Frame des Characters und des Objekts
        return (
            thisX + thisWidth >= objX &&
            thisX <= objX + objWidth &&
            thisY + thisHeight >= objY &&
            thisY <= objY + objHeight
        );
    }
    

    drawFrame(ctx){
        if (this instanceof Character){
            this.drawSpecificFrame(ctx, 60, 1.28, 0.22, 1);
        }
        if (this instanceof SkeletonFighter || this instanceof SkeletonArcher || this instanceof Werewolf) {
            ctx.beginPath();
            ctx.lineWidth = '4';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x + 75 , this.y * 1.28 , this.spriteWidth * 0.28, this.img.height  );
            ctx.stroke();
            
        }  
    }

    drawSpecificFrame(ctx, addX, addY, addSpriteWidth, addSpriteHeight){
      
        ctx.beginPath();
            ctx.lineWidth = '4';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x + addX, this.y * addY, this.spriteWidth * addSpriteWidth  , this.img.height * addSpriteHeight );
            ctx.stroke();
    }

    applyGravity() {
        if (this.isAboveGround() || this.speedY > 0) {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
        }
    }

    moveCamera(targetX) {
        this.world.camera_x = -(this.x - targetX);
    }


    isAboveGround() {
        return this.y < 323;
    };

    playAnimation(totalFrames, frameCounter) {
        this.currentFrame = this.currentFrame % totalFrames;
        this.changeFrames(frameCounter);
    }


    changeFrames(frameCounter){
        this.srcX = this.currentFrame * this.spriteWidth;
        this.framesDrawn++;
        if (this.framesDrawn >= frameCounter) {
            this.currentFrame++;
            this.framesDrawn = 0;
        }
    }
    jump() {
        this.speedY = 22;
    }


    playJumpAnimation(minFrame, maxFrame, frameCounter) {
        if (this.start == 0) {
            this.currentFrame = minFrame;
            this.start++;
        }
        if (this.currentFrame >= maxFrame) {
            this.currentFrame = minFrame;
        }
        this.changeFrames(frameCounter);
        
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
        this.x += 7;
        
    }

    moveLeft() {
        this.x -= 7;
        
    }

    attack() {

    }

   


}