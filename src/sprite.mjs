export class Sprite {
  /** @type {number} */
  height;
  /** @type {number} */
  width;
  /** @type {number} */
  xPos;
  /** @type {number} */
  yPos;

  /**
    @param {number} height
    @param {number} width
    @param {number} xPos
    @param {number} yPos
    */
  constructor(height, width, xPos, yPos) {
    this.height = height;
    this.width = width;
    this.xPos = xPos;
    this.yPos = yPos;
  }

  /**
    @param {Sprite} other
    @returns {boolean}
    */
  collides(other) {
    return (
      this.xPos < other.xPos + other.width &&
      this.xPos + this.width > other.xPos &&
      this.yPos < other.yPos + other.height &&
      this.yPos + this.height > other.yPos
    );
  }

  /**
    @param {number} xPos
    */
  setXPos(xPos) {
    this.xPos = xPos;
  }

  /**
    @param {number} yPos
    */
  setYPos(yPos) {
    this.yPos = yPos;
  }
}
