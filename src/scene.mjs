import { Player } from "./player.mjs";

const SceneBackgroundImage = new Image();
SceneBackgroundImage.src = "/public/background.png";

export class Scene {
  /** @type { CanvasRenderingContext2D } */
  #ctx;
  /** @type {Player} */
  #player;
  /** @type {Obstacle[]} */
  #obstacles;

  /**
    @param {HTMLCanvasElement} canvas
    @param {string} backgroundColor
  */
  constructor(canvas) {
    this.#ctx = canvas.getContext("2d");
    this.#obstacles = [];
  }

  addPlayer() {
    this.#player = new Player();
  }

  /**
    @param {Obstacle} obstacle;
  */
  addObstacle(obstacle) {
    this.#obstacles.push(obstacle);
  }

  /**
    @returns {Player}
  */
  getPlayer() {
    return this.#player;
  }

  render() {
    this.#obstacles = this.#obstacles.filter((o) => o.xPos > 0);

    this.#ctx.reset();

    this.#ctx.drawImage(
      SceneBackgroundImage,
      this.#ctx.canvas.width - SceneBackgroundImage.width,
      this.#ctx.canvas.height - SceneBackgroundImage.height
    );

    this.#ctx.fillStyle = "red";
    this.#ctx.font = "bold 64px serif";
    this.#ctx.textRendering = this.#ctx.fillText(
      `Score: ${Math.floor(this.#player.score)}`,
      100,
      100
    );

    this.#obstacles.forEach((o) => {
      o.xPos -= this.#player.velocity;
      o.render(this.#ctx);

      if (this.#player.collides(o)) {
        alert("You lost! Close this window and try again");
        this.#obstacles = [];
        this.#player = new Player();
      }
    });

    this.#player.render(this.#ctx);
  }
}
