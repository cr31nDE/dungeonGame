class BackgroundObject extends MovableObject{
    constructor(imagePath, x, y){
        super().loadImg(imagePath);
        this.width = 1080;  
        this.height = 720;
        this.x = x;
        this.y = y;
    }
}