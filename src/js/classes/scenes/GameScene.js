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
  create() {}
}
