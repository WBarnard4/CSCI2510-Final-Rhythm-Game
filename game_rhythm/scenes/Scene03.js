class Scene03 extends Scene{
    start(){

      this.addGameObject(new ScoreGameObject("Score"), 20, 50)
      // this.addGameObject(new TimerGameObject(), 0, 0)
      
      // Left Lane
      this.addGameObject(new HitZoneGameObject("Left HitZone", "Left", 3), 200, 500, 50)
  
      // Up Lane
      this.addGameObject(new HitZoneGameObject("Up HitZone", "Up", 3), 400, 500, 50)
  
      // Down Lane
      this.addGameObject(new HitZoneGameObject("Down HitZone", "Down", 3), 600, 500, 50)
  
      // Right Lane
      this.addGameObject(new HitZoneGameObject("Right HitZone", "Right", 3), 800, 500, 50)

      // Metronome
      this.addGameObject(new MetronomeGameObject("Metronome", 2), 1000, 200, 50)
      
      // Adds Notes
      this.addGameObject(new LevelMakerGameObject("Level Maker", "./levels/Level1.txt"))

      // Add 'global' timer
      this.addGameObject(new GameObject("Timer").addComponent(new TimerController()))

      // Add perfect + confetti stuff
      // this.addGameObject(new GameObject("PerfectStuff").addComponent(new PerfectController()))

      this.addGameObject(new GameObject("End Level").addComponent(new EndLevelController()))
    }
  }