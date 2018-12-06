

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({
      key: `preload`
    });
  }
  preload() {
    /*
    this.preloader = this.add.graphics();
    this.load.on(`progress`, this.onProgress, this);
    this.load.on(`complete`, this.onComplete, this);
    this.load.spritesheet(`dog`, `./assets/dog_LR.png`, {
      frameWidth: 26,
      frameHeight: 25
    });
    this.load.spritesheet(`dog2`, `./assets/dog_UD.png`, {
      frameWidth: 11,
      frameHeight: 25
    });
    */
  }
  onProgress(value) {
    console.log(`Loading: ${Math.round(value * 100)}%`);
    this.preloader.clear();
    this.preloader.fillStyle(black, 1);
    this.preloader.fillRect(
      0,
      this.game.config.height / 2,
      this.game.config.width * value,
      5
    );
  }

  onComplete() {
    this.preloader.destroy();
    this.scene.start(`game`);
  }

  create() {}
  update() {}
}
