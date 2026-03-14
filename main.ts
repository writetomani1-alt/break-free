namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const Object = SpriteKind.create()
    export const Ob2 = SpriteKind.create()
    export const Ob3 = SpriteKind.create()
    export const Ob4 = SpriteKind.create()
    export const Ob5 = SpriteKind.create()
    export const Ob6 = SpriteKind.create()
}
function LevelRun (LevelNum: number) {
    if (Level == 1) {
        tiles.setCurrentTilemap(tilemap`level1`)
    } else if (Level == 2) {
        info.setScore(0)
        game.showLongText("Title- Break free .. the moment u step into the maze its speed will increase a lot but do it fast monster starts chasing you the moment u jump in the game and theres a timer", DialogLayout.Full)
        music.play(music.stringPlayable("D G G F D E A D ", 1000), music.PlaybackMode.LoopingInBackground)
        tiles.setCurrentTilemap(tilemap`level2`)
        tiles.placeOnTile(myEnemy, tiles.getTileLocation(1, 1))
        tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 9))
        myEnemy.follow(mySprite, 50)
        myEnemy.setFlag(SpriteFlag.GhostThroughWalls, true)
    } else {
    	
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    game.setGameOverMessage(false, "GAME OVER!")
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ob2, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(Target_2)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass3, function (sprite, location) {
    info.startCountdown(35)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ob4, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(Target_4)
})
scene.onOverlapTile(SpriteKind.NPC, sprites.castle.tileGrass3, function (sprite, location) {
    myEnemy.follow(mySprite, 62)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ob6, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(Target_6)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ob3, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(Target_3)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ob5, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(Target_5)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Object, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(Target)
})
info.onScore(6, function () {
    Level += 1
    LevelRun(2)
})
let Target_6: Sprite = null
let Target_5: Sprite = null
let Target_4: Sprite = null
let Target_3: Sprite = null
let Target_2: Sprite = null
let Target: Sprite = null
let myEnemy: Sprite = null
let mySprite: Sprite = null
let Level = 0
Level = 1
LevelRun(1)
game.showLongText("Title- Break free.. collect the books to escape but do it fast monster starts chasing you the moment u jump in the game", DialogLayout.Full)
info.startCountdown(26)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . f f e e e e f 2 f . . . . 
    . . f f e e e e f 2 2 2 f . . . 
    . . f e e e f f e e e e f . . . 
    . . f f f f e e 2 2 2 2 e f . . 
    . . f e 2 2 2 f f f f e 2 f . . 
    . f f f f f f f e e e f f f . . 
    . f f e 4 4 e b f 4 4 e e f . . 
    . f e e 4 d 4 1 f d d e f . . . 
    . . f e e e e e d d d f . . . . 
    . . . . f 4 d d e 4 e f . . . . 
    . . . . f e d d e 2 2 f . . . . 
    . . . f f f e e f 5 5 f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . f f . . . f f f . . . . 
    `, SpriteKind.Player)
myEnemy = sprites.create(img`
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    ......fbd1111111f.......
    ......fdd1111111df......
    ......fddd111111df......
    ......fdddddd111df......
    ......fdddddd111df......
    ......fbddddddd1df......
    ......ffbbddbfd1df......
    .......fcbbdcfddbf......
    .......fffbddccffff.....
    .......ffffcfbbb1bcf....
    ......ffffffffcd1b1f....
    ...ffffffffff..fdfdf....
    .....ffffff.....f.f.....
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.NPC)
tiles.placeOnTile(myEnemy, tiles.getTileLocation(1, 1))
myEnemy.follow(mySprite, 62)
myEnemy.setFlag(SpriteFlag.GhostThroughWalls, true)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
mySprite.setStayInScreen(true)
Target = sprites.create(img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 1 1 1 1 1 3 3 3 1 1 1 1 1 1 3 
    3 1 1 1 1 1 1 3 1 1 1 1 1 1 1 3 
    3 1 1 1 1 1 1 3 1 1 1 1 1 1 1 3 
    3 1 1 1 1 1 1 3 1 1 1 1 1 1 1 3 
    3 1 1 1 1 1 1 3 1 1 1 1 1 1 1 3 
    3 1 1 1 1 1 1 3 1 1 1 1 1 1 1 3 
    3 1 1 1 1 1 1 3 1 1 1 1 1 1 1 3 
    3 1 1 1 1 1 1 3 1 1 1 1 1 1 1 3 
    3 1 1 1 1 1 1 3 1 1 1 1 1 1 1 3 
    3 1 1 1 1 1 1 3 1 1 1 1 1 1 1 3 
    3 1 1 1 1 1 1 3 1 1 1 1 1 1 1 3 
    3 1 1 1 1 1 1 3 1 1 1 1 1 1 1 3 
    3 1 1 1 1 1 1 3 1 1 1 1 1 1 1 3 
    3 1 1 1 1 1 3 3 3 1 1 1 1 1 1 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    `, SpriteKind.Object)
Target.setPosition(125, 12)
Target_2 = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 1 1 1 1 1 2 2 2 1 1 1 1 1 1 2 
    2 1 1 1 1 1 1 2 1 1 1 1 1 1 1 2 
    2 1 1 1 1 1 1 2 1 1 1 1 1 1 1 2 
    2 1 1 1 1 1 1 2 1 1 1 1 1 1 1 2 
    2 1 1 1 1 1 1 2 1 1 1 1 1 1 1 2 
    2 1 1 1 1 1 1 2 1 1 1 1 1 1 1 2 
    2 1 1 1 1 1 1 2 1 1 1 1 1 1 1 2 
    2 1 1 1 1 1 1 2 1 1 1 1 1 1 1 2 
    2 1 1 1 1 1 1 2 1 1 1 1 1 1 1 2 
    2 1 1 1 1 1 1 2 1 1 1 1 1 1 1 2 
    2 1 1 1 1 1 1 2 1 1 1 1 1 1 1 2 
    2 1 1 1 1 1 1 2 1 1 1 1 1 1 1 2 
    2 1 1 1 1 1 1 2 1 1 1 1 1 1 1 2 
    2 1 1 1 1 1 2 2 2 1 1 1 1 1 1 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Ob2)
Target_2.setPosition(200, 99)
Target_3 = sprites.create(img`
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 1 1 1 1 1 5 5 5 1 1 1 1 1 1 5 
    5 1 1 1 1 1 1 5 1 1 1 1 1 1 1 5 
    5 1 1 1 1 1 1 5 1 1 1 1 1 1 1 5 
    5 1 1 1 1 1 1 5 1 1 1 1 1 1 1 5 
    5 1 1 1 1 1 1 5 1 1 1 1 1 1 1 5 
    5 1 1 1 1 1 1 5 1 1 1 1 1 1 1 5 
    5 1 1 1 1 1 1 5 1 1 1 1 1 1 1 5 
    5 1 1 1 1 1 1 5 1 1 1 1 1 1 1 5 
    5 1 1 1 1 1 1 5 1 1 1 1 1 1 1 5 
    5 1 1 1 1 1 1 5 1 1 1 1 1 1 1 5 
    5 1 1 1 1 1 1 5 1 1 1 1 1 1 1 5 
    5 1 1 1 1 1 1 5 1 1 1 1 1 1 1 5 
    5 1 1 1 1 1 1 5 1 1 1 1 1 1 1 5 
    5 1 1 1 1 1 5 5 5 1 1 1 1 1 1 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    `, SpriteKind.Ob3)
Target_4 = sprites.create(img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 1 1 1 1 1 7 7 7 1 1 1 1 1 1 7 
    7 1 1 1 1 1 1 7 1 1 1 1 1 1 1 7 
    7 1 1 1 1 1 1 7 1 1 1 1 1 1 1 7 
    7 1 1 1 1 1 1 7 1 1 1 1 1 1 1 7 
    7 1 1 1 1 1 1 7 1 1 1 1 1 1 1 7 
    7 1 1 1 1 1 1 7 1 1 1 1 1 1 1 7 
    7 1 1 1 1 1 1 7 1 1 1 1 1 1 1 7 
    7 1 1 1 1 1 1 7 1 1 1 1 1 1 1 7 
    7 1 1 1 1 1 1 7 1 1 1 1 1 1 1 7 
    7 1 1 1 1 1 1 7 1 1 1 1 1 1 1 7 
    7 1 1 1 1 1 1 7 1 1 1 1 1 1 1 7 
    7 1 1 1 1 1 1 7 1 1 1 1 1 1 1 7 
    7 1 1 1 1 1 1 7 1 1 1 1 1 1 1 7 
    7 1 1 1 1 1 7 7 7 1 1 1 1 1 1 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, SpriteKind.Ob4)
Target_4.setPosition(200, 245)
Target_5 = sprites.create(img`
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 1 1 1 1 1 4 4 4 1 1 1 1 1 1 4 
    4 1 1 1 1 1 1 4 1 1 1 1 1 1 1 4 
    4 1 1 1 1 1 1 4 1 1 1 1 1 1 1 4 
    4 1 1 1 1 1 1 4 1 1 1 1 1 1 1 4 
    4 1 1 1 1 1 1 4 1 1 1 1 1 1 1 4 
    4 1 1 1 1 1 1 4 1 1 1 1 1 1 1 4 
    4 1 1 1 1 1 1 4 1 1 1 1 1 1 1 4 
    4 1 1 1 1 1 1 4 1 1 1 1 1 1 1 4 
    4 1 1 1 1 1 1 4 1 1 1 1 1 1 1 4 
    4 1 1 1 1 1 1 4 1 1 1 1 1 1 1 4 
    4 1 1 1 1 1 1 4 1 1 1 1 1 1 1 4 
    4 1 1 1 1 1 1 4 1 1 1 1 1 1 1 4 
    4 1 1 1 1 1 1 4 1 1 1 1 1 1 1 4 
    4 1 1 1 1 1 4 4 4 1 1 1 1 1 1 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    `, SpriteKind.Ob5)
Target_5.setPosition(280, 50)
Target_6 = sprites.create(img`
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 1 1 1 1 1 9 9 9 1 1 1 1 1 1 9 
    9 1 1 1 1 1 1 9 1 1 1 1 1 1 1 9 
    9 1 1 1 1 1 1 9 1 1 1 1 1 1 1 9 
    9 1 1 1 1 1 1 9 1 1 1 1 1 1 1 9 
    9 1 1 1 1 1 1 9 1 1 1 1 1 1 1 9 
    9 1 1 1 1 1 1 9 1 1 1 1 1 1 1 9 
    9 1 1 1 1 1 1 9 1 1 1 1 1 1 1 9 
    9 1 1 1 1 1 1 9 1 1 1 1 1 1 1 9 
    9 1 1 1 1 1 1 9 1 1 1 1 1 1 1 9 
    9 1 1 1 1 1 1 9 1 1 1 1 1 1 1 9 
    9 1 1 1 1 1 1 9 1 1 1 1 1 1 1 9 
    9 1 1 1 1 1 1 9 1 1 1 1 1 1 1 9 
    9 1 1 1 1 1 1 9 1 1 1 1 1 1 1 9 
    9 1 1 1 1 1 9 9 9 1 1 1 1 1 1 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    `, SpriteKind.Ob6)
Target_6.setPosition(280, 180)
Target_3.setPosition(200, 11)
