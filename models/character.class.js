class Character extends MovableObject {
    constructor() {
        
        super().loadImg('img/charakters/Fire vizard/Run.png');
        this.totalFrames = 8;
        this.findFrame();
        this.animate();

    }


    animate() {
        setInterval(() => {

            this.currentFrame = this.currentFrame % this.totalFrames;
            this.srcX = this.currentFrame * this.spriteWidth;
            this.framesDrawn++;
            if (this.framesDrawn >= 7) {
                this.currentFrame++;
                this.framesDrawn = 0;
            }
        }, 1000 / 60)
    }


    jump() {

    }


}