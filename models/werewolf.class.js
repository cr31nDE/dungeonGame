class Werewolf extends MovableObject{
    constructor(){
        super().loadImg('img/charakters/Black_Werewolf/walk.png');
        this.totalFrames = 11;
        this.otherDirection = true;
        this.x = 5700;
        this.findFrame();
        this.animate();
    }
    animate() {
        setInterval(() => {
           this.playAnimation();
        }, 1000 / 60)
    }

    jump(){


    }
}