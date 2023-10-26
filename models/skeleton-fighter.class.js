class SkeletonFighter extends MovableObject{ 
    constructor(){
        super().loadImg('img/charakters/Skeleton_Warrior/Walk.png');
        this.totalFrames = 7;
        this.x = 200 + Math.random() * 500;
        this.findFrame();
        this.animate();
        this.otherDirection = true;
    }

    animate() {
        setInterval(() => {
            this.playAnimation();
        }, 1000 / 60)
    }

    jump(){


    }


}