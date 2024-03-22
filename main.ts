input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    for (let index = 0; index < 1; index++) {
        basic.showString("CANALE")
    }
    basic.pause(2000)
    basic.showLeds(`
        . . # # #
        . . # # #
        # # # # #
        # # # . .
        # # # . .
        `)
    music.ringTone(196)
})
basic.forever(function () {
	
})
