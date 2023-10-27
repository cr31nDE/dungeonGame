class Character extends MovableObject {
    world;
    runingAnimation = 'img/charakters/Fire vizard/Run.png';
    jumpAnimation = 'img/charakters/Fire vizard/Jump.png';
    idleAnimation = 'img/charakters/Fire vizard/Idle.png';
    targetX = 340;
    constructor() {

        super().loadImg('img/charakters/Fire vizard/Idle.png');
        this.totalFrames = 7;
        this.findFrame();
        this.animate(); 
    }


    animate() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < (1080 * 6) - 200) {
                this.moveRight();
                this.otherDirection = false;
            }
            if (this.world.keyboard.LEFT && this.x > 0) {
               this.moveLeft();
               this.otherDirection = true;
            }

            if (this.world.keyboard.SPACE && !this.isAboveGround() || this.world.keyboard.UP && !this.isAboveGround()) {
                this.jump();
            }

            if (this.x >= this.targetX && this.x <= 5740) {
               this.moveCamera(this.targetX);
            } 
        }, 1000 / 60);
    

        setInterval(() => {
            if (this.world.keyboard.RIGHT && !this.isAboveGround() || this.world.keyboard.LEFT && !this.isAboveGround()) {
                this.loadImg(this.runingAnimation);
                this.playAnimation(8, 10);   
            }
            else if (!this.isAboveGround()) {
                this.loadImg(this.idleAnimation)
                this.playAnimation(7, 10);
            }
        }, 1000 / 60)

        setInterval(() =>{
            if (this.isAboveGround() || this.speedY > 0) {             
                this.loadImg(this.jumpAnimation);
                this.applyGravity();
                this.playJumpAnimation(4, 6, 12);
            }
            else{
                this.start = 0;
            }
        }, 1000 / 30 );
    
    }




}
// this.repeatFrames = 2;
// if (this.currentFrame >= this.repeatFrames) {
//     this.currentFrame = 0; // Zurück zu Frame 0 nach den ersten 2 Frames
// }