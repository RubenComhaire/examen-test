import BootScene from './scenes/BootScene.js';
import PreloadScene from './scenes/PreloadScene.js';
import GameScene from './scenes/GameScene.js';
class Game extends Phaser.Game {
  constructor() {
    const config = {
      type: Phaser.AUTO,
      width: 500,
      height: 750,
      parent: 'game',
      scene: [BootScene, PreloadScene, GameScene],
      physics: {
        default: 'arcade',
        arcade: {
          debug: false,
          gravity: {y: 100}
        }
      }
    };
    super(config);
  }
}
export default Game;
