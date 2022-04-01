enum RadioMessage {
    message1 = 49434,
    meerstippen = 41537,
    a = 18289,
    b = 9031,
    c = 32803,
    d = 3456,
    e = 46605,
    f = 24246,
    g = 6494,
    h = 57881,
    i = 58338,
    j = 51171,
    k = 19399
}
radio.onReceivedMessage(RadioMessage.i, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        `)
})
radio.onReceivedMessage(RadioMessage.k, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        # # # # #
        # # # # #
        `)
})
radio.onReceivedMessage(RadioMessage.g, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # # . .
        # # # # #
        `)
})
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
radio.onReceivedMessage(RadioMessage.e, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        # # # # #
        `)
})
radio.onReceivedMessage(RadioMessage.h, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # # # .
        # # # # #
        `)
})
radio.onReceivedMessage(RadioMessage.f, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # . . .
        # # # # #
        `)
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
radio.onReceivedMessage(RadioMessage.j, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        # # # # #
        # # # # #
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
basic.forever(function () {
    if (ampa == 6) {
        radio.sendMessage(RadioMessage.e)
        basic.pause(30000)
    }
})
basic.forever(function () {
    if (ampa == 7) {
        radio.sendMessage(RadioMessage.f)
        basic.pause(30000)
    }
})
basic.forever(function () {
    if (ampa == 25) {
        ampa = 0
    }
})
basic.forever(function () {
    if (ampa == 8) {
        radio.sendMessage(RadioMessage.g)
        basic.pause(30000)
    }
})
basic.forever(function () {
    if (ampa == 9) {
        radio.sendMessage(RadioMessage.h)
        basic.pause(30000)
    }
})
basic.forever(function () {
    if (ampa == 10) {
        radio.sendMessage(RadioMessage.i)
        basic.pause(30000)
    }
})
basic.forever(function () {
    if (ampa == 11) {
        radio.sendMessage(RadioMessage.j)
        basic.pause(30000)
    }
})
basic.forever(function () {
    if (ampa == 12) {
        radio.sendMessage(RadioMessage.k)
        basic.pause(30000)
    }
})
