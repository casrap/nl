enum RadioMessage {
    message1 = 49434,
    meerstippen = 41537,
    a = 18289,
    b = 9031,
    c = 32803,
    d = 3456
}
radio.onReceivedMessage(RadioMessage.d, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
})
input.onButtonPressed(Button.A, function () {
    ampa += 1
})
radio.onReceivedMessage(RadioMessage.c, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # .
        `)
})
radio.onReceivedMessage(RadioMessage.meerstippen, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
})
radio.onReceivedMessage(RadioMessage.a, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # . . .
        `)
})
radio.onReceivedMessage(RadioMessage.b, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # . .
        `)
})
let ampa = 0
radio.setGroup(148)
basic.forever(function () {
    if (ampa == 1) {
        radio.sendMessage(RadioMessage.meerstippen)
        basic.pause(30000)
    }
})
basic.forever(function () {
    if (ampa == 2) {
        radio.sendMessage(RadioMessage.a)
        basic.pause(30000)
    }
})
basic.forever(function () {
    if (ampa == 3) {
        radio.sendMessage(RadioMessage.b)
        basic.pause(30000)
    }
})
basic.forever(function () {
    if (ampa == 4) {
        radio.sendMessage(RadioMessage.c)
        basic.pause(30000)
    }
})
basic.forever(function () {
    if (ampa == 5) {
        radio.sendMessage(RadioMessage.d)
        basic.pause(30000)
    }
})
