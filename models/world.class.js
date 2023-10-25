class World {
    character = new Character();
    enemies = [
        new SkeletonArcher,
        new SkeletonFighter,
        new SkeletonFighter,
    ];
    backgroundObjects = [
        new BackgroundObject('img/background/Dungeon_Level_1.png', 0, 0),
        new BackgroundObject('img/background/Dungeon_Level_2.png', 0, 1080),
        new BackgroundObject('img/background/Dungeon_Level_3.png', 0, 2160),
        new BackgroundObject('img/background/Dungeon_Level_4.png', 0, 3240),
        new BackgroundObject('img/background/Dungeon_Level_5.png', 0, 4320),
        new BackgroundObject('img/background/Dungeon_Level_6.png', 0, 5400),
    ]

    canvas;
    ctx;
    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.addBackground(this.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addBackground(bgr){
        bgr.forEach(bgr => {
            this.ctx.drawImage(bgr.img, bgr.x, bgr.y, 1080, 720);
        });
    }

    addObjectsToMap(objects){
        objects.forEach(o => {
            this.addToMap(o);
        })
    }

    addToMap(mo){
        this.ctx.drawImage(mo.img, mo.srcX, mo.srcY, mo.spriteWidth, mo.img.height, mo.x, mo.y, mo.spriteWidth * 1.5, mo.img.height * 1.5)
    }




}