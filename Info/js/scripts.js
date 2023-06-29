const Application = PIXI.Application;
const loader = PIXI.Loader.shared;
const app = new Application({
  width: 1920,
  height: 1080,
  backgroundColor: 0x000000
});

document.body.appendChild(app.view);

loader.add("backgroundImage", "./images/background1.jpg").load(() => {
  const backgroundImage = new PIXI.Sprite(loader.resources.backgroundImage.texture);
  backgroundImage.anchor.set(0.5);
  backgroundImage.x = app.renderer.width / 2;
  backgroundImage.y = app.renderer.height / 2;

  const container = new PIXI.Container();
  container.addChild(backgroundImage);
  app.stage.addChild(container);
});
