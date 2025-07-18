import { Sprite } from "./sprite.mjs";

const PlayerImage = new Image();
PlayerImage.src = "/public/dino.png";

const PLAYER_WIDTH = 75;
const PLAYER_HEIGHT = 100;

const START_PLAYER_Y_POS = window.innerHeight - 150 - PLAYER_HEIGHT;
const PLAYER_X_POS = 200;

const PLAYER_JUMP_HEIGHT = PLAYER_HEIGHT * 2.5;

export class Player extends Sprite {
  /** @type { number } */
  velocity;
  /** @type { number } */
  score;

  constructor() {
    super(PLAYER_HEIGHT, PLAYER_WIDTH, PLAYER_X_POS, START_PLAYER_Y_POS);

    this.velocity = 10;
    this.score = 0;

    setInterval(() => {
      this.velocity = this.velocity * 1.01;
    }, 1_000);

    document.addEventListener("keypress", (event) => {
      if (event.code !== "Space" || this.yPos !== START_PLAYER_Y_POS) {
        return;
      }

      this.jump();
    });
  }

  /**
        @param { CanvasRenderingContext2D } ctx
    */
  render(ctx) {
    this.score += 0.1;
    ctx.drawImage(PlayerImage, this.xPos, this.yPos, this.width, this.height);
  }

  jump() {
    const goDown = () =>
      requestAnimationFrame(() => {
        if (this.yPos < START_PLAYER_Y_POS) {
          this.setYPos(this.yPos + 20);
          goDown();
        }
      });

    const goUp = () =>
      requestAnimationFrame(() => {
        if (this.yPos > START_PLAYER_Y_POS - PLAYER_JUMP_HEIGHT) {
          this.setYPos(this.yPos - 20);
          goUp();
        } else {
          goDown();
        }
      });

    goUp();
  }
}
