namespace SpriteKind {
    export const Flag = SpriteKind.create()
    export const Player2 = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level6`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.clouds)
    game.reset()
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (Birdy_2_robin.vy == 0) {
        Birdy_2_robin.vy = -150
    }
})
function bouncebad () {
    for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
        Eviler_musher1 = sprites.create(assets.image`musher`, SpriteKind.Enemy)
        statusbar = statusbars.create(20, 4, StatusBarKind.Health)
        statusbar.attachToSprite(Eviler_musher1)
        tiles.placeOnTile(Eviler_musher1, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        if (Math.percentChance(50)) {
            Eviler_musher1.vx = 50
        } else {
            Eviler_musher1.vx = -50
        }
        Eviler_musher1.setBounceOnWall(true)
    }
}
scene.onOverlapTile(SpriteKind.Player2, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.clouds)
    game.reset()
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (Birdy_1_duck.vy == 0) {
        Birdy_1_duck.vy = -170
    }
})
sprites.onOverlap(SpriteKind.Player2, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    info.player2.changeLifeBy(-1)
})
let statusbar: StatusBarSprite = null
let Birdy_2_robin: Sprite = null
let Birdy_1_duck: Sprite = null
let Eviler_musher1: Sprite = null
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level4`)
bouncebad()
tiles.placeOnTile(Eviler_musher1, tiles.getTileLocation(25, 5))
Birdy_1_duck = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))
Birdy_2_robin = mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two))
tiles.placeOnTile(Birdy_1_duck, tiles.getTileLocation(1, 6))
Birdy_1_duck = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . b b d d d 5 5 5 5 5 5 5 b . . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    c b 5 5 b c d d 5 5 5 5 5 5 b . 
    b b c c c d d d 5 5 5 5 5 d b . 
    . . . . c c d d d 5 5 5 b b . . 
    . . . . . . c c c c c b b . . . 
    `, SpriteKind.Player)
mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.life, 3)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, Birdy_1_duck)
tiles.placeOnTile(Birdy_2_robin, tiles.getTileLocation(1, 6))
Birdy_2_robin = sprites.create(img`
    . . . . . . . . . . b 2 b . . . 
    . . . . . . . . . b 2 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 2 2 2 2 2 b . . . 
    . . . . b b 2 d 1 f 2 d 4 c . . 
    . . . . b 2 2 1 f f d d 4 4 4 b 
    . . . . b 2 2 d f b 4 4 4 4 b . 
    . . . b d 2 2 2 2 4 4 4 4 b . . 
    . b b d d d 2 2 2 2 2 2 2 b . . 
    b d d d b b b 2 2 2 2 2 2 2 b . 
    c d d b 2 2 d c 2 2 2 2 2 2 b . 
    c b b d 2 d c d 2 2 2 2 2 2 b . 
    c b 2 2 b c d d 2 2 2 2 2 2 b . 
    b b c c c d d d 2 2 2 2 2 d b . 
    . . . . c c d d d 2 2 2 b b . . 
    . . . . . . c c c c c b b . . . 
    `, SpriteKind.Player2)
mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.life, 3)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, Birdy_2_robin)
Birdy_1_duck.ay = 200
Birdy_2_robin.ay = 200
controller.moveSprite(Birdy_1_duck, 100, 0)
controller.player2.moveSprite(Birdy_2_robin, 100, 0)
mp.setPlayerIndicatorsVisible(true)
