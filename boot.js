const RenJSConfig =  {
  'name': 'Quickstart',
  'w': 1920,
  'h': 1080,
  'renderer': Phaser.AUTO, 
  'scaleMode': Phaser.ScaleManager.EXACT_FIT, // default (nanti diubah)
  'loadingScreen': {
    'background': 'assets/gui/loaderloaderbackground.png',
    'loadingBar': {
      'asset': 'assets/gui/loaderloading-bar.png',
      'position': { 'x': 671, 'y': 540 },
      'size': { 'w': 578, 'h': 82 }
    }
  },
  'fonts': 'assets/gui/fonts.css',
  'guiConfig': 'story/GUI.yaml',
  storyConfig: 'story/Config.yaml',
  storySetup: 'story/Setup.yaml',
  'storyText': [ 'story/Story.yaml' ],
  'logChoices': true,
}

const RenJSGame = new RenJS.game(RenJSConfig)
RenJSGame.launch()

// 🔹 Fungsi untuk atur scaleMode otomatis
function setScaleMode() {
  if (!RenJSGame.game) return
  if (window.innerWidth < window.innerHeight) {
    // Portrait → SHOW_ALL (biar tidak gepeng)
    RenJSGame.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
  } else {
    // Landscape → EXACT_FIT (fullscreen penuh)
    RenJSGame.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT
  }
  RenJSGame.game.scale.refresh()
}

// Panggil pertama kali setelah game siap
window.addEventListener("load", setScaleMode)
// Update saat resize atau rotasi device
window.addEventListener("resize", setScaleMode)
window.addEventListener("orientationchange", setScaleMode)
