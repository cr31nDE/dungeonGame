class Character extends MovableObject {
    world;
    constructor() {

        super().loadImg('img/charakters/Fire vizard/Walk.png');
        this.totalFrames = 6;

        this.findFrame();
        this.animate();

    }


    animate() {
        setInterval(()=>{
            if (this.world.keyboard.RIGHT) {
                this.x += 3;
                this.otherDirection = false;
            }
            if (this.world.keyboard.LEFT) {
                this.x -= 3;
                this.otherDirection = true;

            }
            
                this.world.camera_x = -this.x + 100;
            
            
        }, 1000 / 60)

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