import Emoticon from '../gameobjects/Emoticon';
export default class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: `game`
    });
  }
  init() {
    this.score = 0;
  }
  create() {
    //setup scorefield
    this.scoreTextField = this.add.text(16, 16, `Score: 0`, {
      fontSize: `32px`,
      fill: `#FFFFFF`
    });
    this.emoticons = this.physics.add.staticGroup();
    this.emoticons.createIfNull = false;

    this.initEmoticons();
    this.addDividers();

    this.timedEvent = this.time.addEvent({
      delay: 2500,
      callback: this.addEmoticon,
      callbackScope: this,
      loop: true
    });
  }

  addDividers() {
    const redGr = this.make
      .graphics()
      .fillStyle(0xff0000)
      .fillRect(0, 0, this.game.config.width / 2, 100);
    redGr.generateTexture('red', this.game.config.width / 2, 100);
    redGr.destroy();
    const greenGr = this.make
      .graphics()
      .fillStyle(0x00ff00)
      .fillRect(0, 0, this.game.config.width / 2, 100);
    greenGr.generateTexture('green', this.game.config.width / 2, 100);
    greenGr.destroy();

    this.add.image(
      this.game.config.width / 2 / 2,
      this.game.config.height,
      'red'
    );
    this.add.image(
      this.game.config.width - this.game.config.width / 2 / 2,
      this.game.config.height,
      'green'
    );
  }
  addEmoticon() {
    const emoticon = this.emoticons.getFirstDead();
    emoticon.setRandomFrame();
    console.log(emoticon.frame.name);
    emoticon.enableBody(
      true,
      Phaser.Math.Between(0, this.game.config.width),
      - 200,
      true,
      true
    );
  }
  updateScore(val) {
    this.score += val;
    this.scoreTextField.setText(`Score: ${this.score}`);
  }
  initEmoticons() {
    for (let i = 0;i < 20;i ++) {
      const sprite = new Emoticon(
        this,
        Phaser.Math.Between(0, this.game.config.width),
        - 200,
        `emoticons`
      );
      sprite.on('updatescore', val => {
        this.updateScore(val);
      });
      this.emoticons.add(sprite);
    }
    this.emoticons.runChildUpdate = true;
  }
}
