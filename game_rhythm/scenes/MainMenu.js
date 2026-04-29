class MainMenu extends Scene {
    start() {
        // Level buttons
        this.addGameObject(new ButtonGameObject("Scene1", Scene01 , "Scene01", 55, 60), 400, 200, -1, 200, 100)
        this.addGameObject(new ButtonGameObject("Scene2", Scene02, "Scene02", 55, 60), 400, 400, -1, 200, 100)
        this.addGameObject(new ButtonGameObject("Scene3", Scene03, "Scene03", 55, 60), 400, 600, -1, 200, 100)

        // Level high scores
        this.addGameObject(new ScoreDisplayGameObject("Scene1Score", 1, "High Score: ", 55, 45), 600, 200, -1, 200, 100)
        this.addGameObject(new ScoreDisplayGameObject("Scene2Score", 2, "High Score: ", 55, 45), 600, 400, -1, 200, 100)
        this.addGameObject(new ScoreDisplayGameObject("Scene3Score", 3, "High Score: ", 55, 45), 600, 600, -1, 200, 100)

        this.addGameObject(new GameObject().addComponent(new Text("rgb(0, 0, 0)", "40px Times New Roman", "Rhythm Game", 100, 475)))
    }
}