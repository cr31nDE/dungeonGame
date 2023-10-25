class SkeletonArcher extends MovableObject{
    constructor(){
        super().loadImg('img/charakters/Skeleton_Archer/Walk.png');
        this.totalFrames = 8;
        this.x = 400;
        this.findFrame();
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.currentFrame = this.currentFrame % this.totalFrames;
            this.srcX = this.currentFrame * this.spriteWidth;
            this.framesDrawn++;
            if (this.framesDrawn >= 8) {
                this.currentFrame++;
                this.framesDrawn = 0;
            }
        }, 1000 / 60)
    }


    jump(){

    }
}