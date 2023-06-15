input.onButtonPressed(Button.A, function () {
    basic.showNumber(text1.length)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= text2.length - 1; index++) {
        basic.showString(text2.charAt(index))
        basic.pause(500)
        basic.clearScreen()
        basic.pause(200)
    }
    basic.showString("X")
})
let text2 = ""
let text1 = ""
text1 = "PUPPY"
text2 = "CRYSTAL"
let text3 = "DOGGY"
