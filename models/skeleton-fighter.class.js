class SkeletonFighter extends MovableObject{ 
    constructor(){
        super().loadImg('img/charakters/Skeleton_Warrior/Walk.png');
        this.totalFrames = 7;
        this.x = 700;
        this.findFrame();
        this.animate();
        this.otherDirection = true;
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.totalFrames, 10);
        }, 1000 / 60)
    }

    jump(){


    }


}