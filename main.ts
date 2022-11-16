input.onButtonPressed(Button.A, function () {
    valami = 0
})
input.onGesture(Gesture.Shake, function () {
    valami = 4
    basic.pause(1000)
    valami = randint(1, 3)
})
input.onButtonPressed(Button.B, function () {
    valami = 0
})
let valami = 0
valami = 0
basic.forever(function () {
    if (valami == 0) {
        basic.clearScreen()
    }
    if (valami == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    }
    if (valami == 2) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    }
    if (valami == 3) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    }
    if (valami == 4) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            . . . . .
            `)
    }
})
