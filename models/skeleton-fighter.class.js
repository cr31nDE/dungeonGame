class SkeletonFighter extends MovableObject {
    isDeadAnimation = 'img/charakters/Skeleton_Warrior/Dead.png'
    constructor() {
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



        setInterval(() => {
            if (world.character.isBurning(this)) {
                console.log('dead')
            }
        }, 1000 / 60);
    }


    isDead() {
        setInterval(() => {
            this.loadImg(this.isDeadAnimation)
            this.playDeadAnimation(4, 10);
        }, 1000/60)
    }

}


