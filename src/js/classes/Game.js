import PreloadScene from "./scenes/PreloadScene.js";
import GameScene from "./scenes/GameScene.js";
class Game extends Phaser.Game {
  constructor() {
    super({
      type: Phaser.AUTO,
      width: 500,
      height: 750,
      title: `Exam`,
      parent: "game",
      scene: [PreloadScene, GameScene],
      version: `1.0`,
      physics: {
        default: `arcade`,
        arcade: {
          debug: false
        }
      }
    });
  }
}
export default Game;
