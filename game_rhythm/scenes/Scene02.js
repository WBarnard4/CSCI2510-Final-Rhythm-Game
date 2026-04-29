class Scene02 extends Scene {
    start() {
        let left = 200
        let up = 400
        let down = 600
        let right = 800
        let speed = 1000

        this.addGameObject(new ScoreGameObject("Score"), 20, 50)
        // Left Lane
        this.addGameObject(new HitZoneGameObject("Left HitZone", "Left", 2), left, 600, 50)

        // Up Lane
        this.addGameObject(new HitZoneGameObject("Up HitZone", "Up", 2), up, 600, 50)

        // Down Lane
        this.addGameObject(new HitZoneGameObject("Down HitZone", "Down", 2), down, 600, 50)

        // Right Lane
        this.addGameObject(new HitZoneGameObject("Right HitZone", "Right", 2), right, 600, 50)

        this.addGameObject(new NoteGameObject("Left Note", "Left", speed), left, 100, 50)
        this.addGameObject(new NoteGameObject("Left Note", "Left", speed), left, -400, 50)
        this.addGameObject(new NoteGameObject("Up Note", "Up", speed), up, -900, 50)
        this.addGameObject(new NoteGameObject("Up Note", "Up", speed), up, -1400, 50)
        this.addGameObject(new NoteGameObject("Down Note", "Down", speed), down, -1900, 50)
        this.addGameObject(new NoteGameObject("Down Note", "Down", speed), down, -2400, 50)
        this.addGameObject(new NoteGameObject("Up Note", "Up", speed), up, -2900, 50)

        this.addGameObject(new NoteGameObject("Right Note", "Right", speed), right, -3900, 50)
        this.addGameObject(new NoteGameObject("Right Note", "Right", speed), right, -4400, 50)
        this.addGameObject(new NoteGameObject("Down Note", "Down", speed), down, -4900, 50)
        this.addGameObject(new NoteGameObject("Down Note", "Down", speed), down, -5400, 50)
        this.addGameObject(new NoteGameObject("Up Note", "Up", speed), up, -5900, 50)
        this.addGameObject(new NoteGameObject("Up Note", "Up", speed), up, -6400, 50)
        this.addGameObject(new NoteGameObject("Left Note", "Left", speed), left, -6900, 50)

        this.addGameObject(new NoteGameObject("Right Note", "Right", speed), right, -7900, 50)
        this.addGameObject(new NoteGameObject("Right Note", "Right", speed), right, -8400, 50)
        this.addGameObject(new NoteGameObject("Down Note", "Down", speed), down, -8900, 50)
        this.addGameObject(new NoteGameObject("Down Note", "Down", speed), down, -9400, 50)
        this.addGameObject(new NoteGameObject("Up Note", "Up", speed), up, -9900, 50)
        this.addGameObject(new NoteGameObject("Up Note", "Up", speed), up, -10400, 50)
        this.addGameObject(new NoteGameObject("Left Note", "Left", speed), left, -10900, 50)

        this.addGameObject(new NoteGameObject("Right Note", "Right", speed), right, -11900, 50)
        this.addGameObject(new NoteGameObject("Right Note", "Right", speed), right, -12400, 50)
        this.addGameObject(new NoteGameObject("Down Note", "Down", speed), down, -12900, 50)
        this.addGameObject(new NoteGameObject("Down Note", "Down", speed), down, -13400, 50)
        this.addGameObject(new NoteGameObject("Up Note", "Up", speed), up, -13900, 50)
        this.addGameObject(new NoteGameObject("Up Note", "Up", speed), up, -14400, 50)
        this.addGameObject(new NoteGameObject("Left Note", "Left", speed), left, -14900, 50)

        this.addGameObject(new NoteGameObject("Left Note", "Left", speed), left, -15900, 50)
        this.addGameObject(new NoteGameObject("Left Note", "Left", speed), left, -16400, 50)
        this.addGameObject(new NoteGameObject("Up Note", "Up", speed), up, -16900, 50)
        this.addGameObject(new NoteGameObject("Up Note", "Up", speed), up, -17400, 50)
        this.addGameObject(new NoteGameObject("Down Note", "Down", speed), down, -17900, 50)
        this.addGameObject(new NoteGameObject("Down Note", "Down", speed), down, -18400, 50)
        this.addGameObject(new NoteGameObject("Up Note", "Up", speed), up, -18900, 50)

        this.addGameObject(new NoteGameObject("Right Note", "Right", speed), right, -19900, 50)
        this.addGameObject(new NoteGameObject("Right Note", "Right", speed), right, -20400, 50)
        this.addGameObject(new NoteGameObject("Down Note", "Down", speed), down, -20900, 50)
        this.addGameObject(new NoteGameObject("Down Note", "Down", speed), down, -21400, 50)
        this.addGameObject(new NoteGameObject("Up Note", "Up", speed), up, -21900, 50)
        this.addGameObject(new NoteGameObject("Up Note", "Up", speed), up, -22400, 50)
        this.addGameObject(new NoteGameObject("Left Note", "Left", speed), left, -22900, 50)

        this.addGameObject(new GameObject("Timer").addComponent(new TimerController()))
        this.addGameObject(new MetronomeGameObject("Metronome", 2), 1000, 200, 50)
        this.addGameObject(new GameObject("End Level").addComponent(new EndLevelController()))


        // this.addGameObject(new NoteGameObject("Down Note", "Down", speed), down, -1400, 50)
        // this.addGameObject(new NoteGameObject("Right Note", "Right", speed), right, -1400, 50)
    }
}