class World {
    character = new Character();
    enemies = [
        new SkeletonArcher,
        new SkeletonFighter,
        new SkeletonFighter,
        new Werewolf
    ];
    backgroundObjects = [
        new BackgroundObject('img/background/Dungeon_Level_1.png', 0, 0),
        new BackgroundObject('img/background/Dungeon_Level_2.png', 1080, 0),
        new BackgroundObject('img/background/Dungeon_Level_3.png', 2160, 0),
        new BackgroundObject('img/background/Dungeon_Level_4.png', 3240, 0),
        new BackgroundObject('img/background/Dungeon_Level_5.png', 4320, 0),
        new BackgroundObject('img/background/Dungeon_Level_6.png', 5400, 0),
    ]
    keyboard;
    canvas;
    ctx;
    camera_x = 0;
    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
        this.checkFlameJet();    
    }

    setWorld() {
        this.character.world = this;
    }

    checkCollisions() {
        setInterval(() => {
            this.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    console.log('collision with enemy')
                }
            });

        }, 100);
    }

    checkFlameJet() {
        setInterval(() => {
            this.enemies.forEach((enemy) => {
                if (this.character.isBurning(enemy) && this.keyboard.F) {
                    enemy.isDead();
                }
            });

        }, 100);
    }

    draw() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addBackground(this.backgroundObjects);
        this.addObjectsToMap(this.enemies);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addBackground(bgr) {
        bgr.forEach(bgr => {
            this.ctx.drawImage(bgr.img, bgr.x, bgr.y, 1080, 720);
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);


        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.spriteWidth + 50, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }




}