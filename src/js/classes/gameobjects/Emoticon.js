export default class Emoticon extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);

    this.emoticonNames = [
      `fingers.svg`,
      `love.svg`,
      `money.svg`,
      `nerd.svg`,
      `poo.svg`,
      `smile.svg`
    ];
    this.setRandomFrame();
    scene.add.existing(this);
    scene.physics.add.existing(this);
    scene.sys.arcadePhysics.world.enableBody(this, 0);
    this.setCollideWorldBounds(true);
    this.onWorldBounds = true;
    this.setBounce(0.3);
    this.setInteractive();
    this.body.onWorldBounds = true;
    //event handling
    this.on(`pointerdown`, this.onDown);
    this.on(`pointerup`, this.onUp);

    this.scene = scene;

    this.disableBody(true, true);
  }
  setRandomFrame() {
    const rand = Math.round(Math.random() * this.emoticonNames.length);
    this.frameName = this.emoticonNames[rand];
    this.setFrame(this.frameName);
  }

  onDown(pointer) {
    this.downX = pointer.x;
    this.downY = pointer.y;
  }
  onUp(pointer) {
    console.log(this.frameName);
    const x = pointer.x - this.downX;
    if (this.frameName === `poo.svg`) {
      this.setVelocity(- 75, - 100);
    } else {
      this.setVelocity(75, - 100);
    }
  }
  sendUpdate(val) {
    this.emit('updatescore', val);
  }
  update() {
    if (this.body.y > this.scene.game.config.height - 100) {
      if (
        this.body.x > this.scene.game.config.width / 2 &&
        this.frameName !== `poo.svg`
      ) {
        //a good emoticon has landed on the good side
        //dispatchevent om score te updaten
        this.sendUpdate(1);
      } else if (
        this.body.x < this.scene.game.config.width / 2 &&
        this.frameName === `poo.svg`
      ) {
        //a bad emoticon has landed on the bad side
        this.sendUpdate(1);
      } else {
        //an emoticon went to the wrong section
        this.sendUpdate(0);
      }
      this.disableBody(true, true);
    }
  }
}
