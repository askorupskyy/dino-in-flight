import { Scene } from "./scene.mjs";
import { Obstacle } from "./obstacle.mjs";

const canvas = document.getElementsByTagName("canvas").item(0);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/** @type {Scene} */
const scene = new Scene(canvas, "black");
scene.addPlayer();
const render = () =>
  requestAnimationFrame(() => {
    scene.render();
    render();
  });
render();

const createObstacle = () => {
  setTimeout(() => {
    scene.addObstacle(new Obstacle(canvas.width - 10));
    createObstacle();
  }, Math.random() * (3_000 / (scene.getPlayer().velocity - 9)) + 1_000 / (scene.getPlayer().velocity - 9)); // between one and 3 seconds
};

setTimeout(() => {
  createObstacle();
}, 5_000);
