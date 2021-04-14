controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    flipHorizontal()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    flipVertical()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    flipHorizontal()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    flipHorizontal()
})
function flipVertical () {
    mySprite.image.flipY()
    pause(200)
}
function flipHorizontal () {
    mySprite.image.flipX()
    pause(200)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    flipHorizontal()
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 3 3 . . . . . . . . 
    . . . . 3 3 . 3 . . . . . . . . 
    . . . . 3 . . . 3 3 . . . . . . 
    . . . . 3 . . . . 3 . . . . . . 
    . . . . 3 . . . . 3 . . . . . . 
    . . . . 3 . . . . 3 . . . . . . 
    . . . . 3 . . . . 3 . . . . . . 
    . . . . 3 . . . . 3 . . . . . . 
    . . . . 3 3 3 3 3 3 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(6)
