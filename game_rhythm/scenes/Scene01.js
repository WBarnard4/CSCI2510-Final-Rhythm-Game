class Scene01 extends Scene {
  start() {
    let speed = 1000

    this.addGameObject(new ScoreGameObject("Score"), 20, 50)
    // Left Lane
    this.addGameObject(new HitZoneGameObject("Left HitZone", "Left", 1), 200, 500, 50)
    this.addGameObject(new NoteGameObject("Left Note", "Left", speed), 200, 0, 50)

    // Up Lane
    this.addGameObject(new HitZoneGameObject("Up HitZone", "Up", 1), 400, 500, 50)
    this.addGameObject(new NoteGameObject("Up Note", "Up", speed), 400, -500, 50)

    // Down Lane
    this.addGameObject(new HitZoneGameObject("Down HitZone", "Down", 1), 600, 500, 50)
    this.addGameObject(new NoteGameObject("Down Note", "Down", speed), 600, -1000, 50)

    // Right Lane
    this.addGameObject(new HitZoneGameObject("Right HitZone", "Right", 1), 800, 500, 50)
    this.addGameObject(new NoteGameObject("Right Note", "Right", speed), 800, -1500, 50)

    // this.addGameObject(new LevelMakerGameObject("Level Maker", "./levels/Level1.txt"))
    
    this.addGameObject(new GameObject("Timer").addComponent(new TimerController()))
    this.addGameObject(new MetronomeGameObject("Metronome", 2), 1000, 200, 50)
    this.addGameObject(new GameObject("End Level").addComponent(new EndLevelController()))
  }
}