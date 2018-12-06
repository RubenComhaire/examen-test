//import Player from "../gameobjects/Player";
import Game from '../Game';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: `game`
    });
  }
  init() {
    this.gameOver = false;
  }
  create() {
    /*
    this.createCars();

    this.physics.add.overlap(
      this.player,
      this.bones,
      this.collectFood,
      null,
      this
    );
    //player collides met de world bounds zodat hij niet buiten het scherm can
    this.player.body.collideWorldBounds = true;
    */
  }

  createControls() {}

  update() {}
}
