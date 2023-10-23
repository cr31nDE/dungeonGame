class BackgroundObject extends MovableObject{
    constructor(imagePath){
        super().loadImg(imagePath);
        this.width = 1080;  
        this.height = 720;
        this.x = 0;
        this.y = 0;
    }
}