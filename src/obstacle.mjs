import { Sprite } from "./sprite.mjs";

const ObstacleImage = new Image();
ObstacleImage.src = "/public/bomb.png";

const OBSTACLE_WIDTH = 60;
const OBSTACLE_HEIGHT = 60;

const OBSTACLE_Y_POS = window.innerHeight - 150 - OBSTACLE_HEIGHT;

export class Obstacle extends Sprite {
  /**
    @param {number} xPos
  */
  constructor(xPos) {
    super(OBSTACLE_HEIGHT, OBSTACLE_WIDTH, xPos, OBSTACLE_Y_POS);
  }

  /**
    @param { CanvasRenderingContext2D } ctx
  */
  render(ctx) {
    ctx.drawImage(ObstacleImage, this.xPos, this.yPos, this.width, this.height);
  }
}
