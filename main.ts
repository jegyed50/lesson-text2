function ShowStringPerChars (text: string, showms: number, clearms: number) {
    for (let index = 0; index <= text.length - 1; index++) {
        basic.showString(text.charAt(index))
        basic.pause(showms)
        basic.clearScreen()
        basic.pause(clearms)
    }
}
input.onButtonPressed(Button.A, function () {
    basic.showNumber(text1.length)
})
input.onButtonPressed(Button.B, function () {
    ShowStringPerChars("abc", 500, 200)
    ShowStringPerChars(text2, 250, 100)
})
let text2 = ""
let text1 = ""
text1 = "PUPPY"
text2 = "CRYSTAL"
let text3 = "DOGGY"
