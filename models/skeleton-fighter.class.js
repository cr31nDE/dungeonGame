class SkeletonFighter extends MovableObject{ 
    constructor(){
        super().loadImg('img/charakters/Skeleton_Warrior/Walk.png');
        this.totalFrames = 7;
        this.x = 200 + Math.random() * 500;
    }
    jump(){


    }


}