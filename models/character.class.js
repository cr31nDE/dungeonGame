class Character extends MovableObject {
    world;
    constructor() {

        super().loadImg('img/charakters/Fire vizard/Walk.png');
        this.totalFrames = 6;

        this.findFrame();
        this.animate();

    }


    animate() {
        const targetX = 340;
        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < (1080 * 6) - 200) {
                this.x += 30;
                this.otherDirection = false;
            }
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.x -= 30;
                this.otherDirection = true;
            }
    
            if (this.x >= targetX && this.x <= 5740) {
                this.world.camera_x = -(this.x - targetX);
            } 
        }, 1000 / 60);
    

        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.currentFrame = this.currentFrame % this.totalFrames;
                this.srcX = this.currentFrame * this.spriteWidth;
                this.framesDrawn++;
                if (this.framesDrawn >= 8) {
                    this.currentFrame++;
                    this.framesDrawn = 0;

                }
            }
        }, 15)
    }


    jump() {

    }


}
// this.repeatFrames = 2;
// if (this.currentFrame >= this.repeatFrames) {
//     this.currentFrame = 0; // Zurück zu Frame 0 nach den ersten 2 Frames
// }