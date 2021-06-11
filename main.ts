input.onGesture(Gesture.Shake, function () {
    soundExpression.giggle.playUntilDone()
    basic.showIcon(IconNames.Surprised)
    timer = 0
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    soundExpression.happy.playUntilDone()
    basic.showIcon(IconNames.Happy)
    timer = 0
})
let timer = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)
soundExpression.hello.playUntilDone()
basic.forever(function () {
    basic.pause(1000)
    timer = 1
    if (timer == 20) {
        basic.showIcon(IconNames.Sad)
        soundExpression.sad.playUntilDone()
    }
    if (timer == 30) {
        basic.showIcon(IconNames.Asleep)
        soundExpression.yawn.playUntilDone()
    }
    if (timer == 40) {
        basic.showIcon(IconNames.Skull)
        soundExpression.mysterious.playUntilDone()
        music.setBuiltInSpeakerEnabled(false)
    }
})
