class World {
    character = new Character();
    enemies = [
        new SkeletonArcher,
        new SkeletonFighter,
        new SkeletonFighter,
    ]
    ctx;
    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.draw();
    }

    draw() {
        this.character.spriteWidth = this.character.img.width / this.character.totalFrames;
        this.character.spriteHeight = this.character.img.height;
        this.ctx.drawImage(this.character.img, this.character.srcX, this.character.srcY, this.character.spriteWidth, this.character.spriteHeight, 0, 0, this.character.spriteWidth, this.character.spriteHeight );
    }
}