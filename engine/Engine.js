class Engine {
  static currentScene
  static nextScene
  static lastMS = 0

  //Game loop (engine code)
  // static tick(ms) {
    static tick() {
    if (Engine.nextScene) {
      // Time.deltaTime = (ms - Engine.lastMS)/1000
      // Engine.lastMS = ms
      
      // console.log(Time.deltaTime)
      Events.clearEvents()
      Engine.currentScene = Engine.nextScene
      Engine.nextScene = null
    }
    Engine.currentScene.update() // Update the engine
    Engine.currentScene.draw() // Draw the engine
    Input.update()
    // requestAnimationFrame(Engine.tick)
  }

  static setup() {
    window.addEventListener("keydown", Input.keydown) // Listen for key down events and send them to the Input class
    window.addEventListener("keyup", Input.keyup)     // Listen for key up events and send them to the Input class

    window.addEventListener("mousemove", Input.mousemove)
    window.addEventListener("mousedown", Input.mousedown)
    window.addEventListener("mouseup", Input.mouseup)

    canvas = document.getElementById("canv")  // Get the canvas element
    ctx = canvas.getContext("2d")             // Get the 2d drawing context
  }

  static start() {
    Engine.setup()
    setInterval(Engine.tick, Time.msBetweenFrames) //Start the game loop (engine code)
    // requestAnimationFrame(Engine.tick)
  }
}
