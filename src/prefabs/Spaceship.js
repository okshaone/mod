class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue, direction) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.points = pointValue;
        this.startx = x;
        this.direction = direction;
        this.moveSpeed = game.settings.spaceshipSpeed * direction;
    }

    update() {
        this.x -= this.moveSpeed;
        if (this.direction == 1 &&
            this.x <= 0 - this.width) {
            this.reset();
        }
        if (this.direction == -1 &&
            this.x >= 0 + game.config.width) {
            this.reset();
        }
    }
    
    reset() {
        this.x = this.startx;
    }

}