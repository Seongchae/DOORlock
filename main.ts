/**
 * -충돌센서가 떨어지면(off) 0.1초마다 led 점등
 * 
 * -충돌센서가 붙으면(on) safe! 출력
 */
OLED.init(128, 64)
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        OLED.writeStringNewLine("warning!")
        basic.showIcon(IconNames.Angry)
        while (pins.digitalReadPin(DigitalPin.P1) == 1) {
            pins.digitalWritePin(DigitalPin.P2, 0)
            basic.pause(100)
            pins.digitalWritePin(DigitalPin.P2, 1)
            basic.pause(100)
        }
    } else {
        OLED.writeStringNewLine("safe!")
        while (pins.digitalReadPin(DigitalPin.P1) == 0) {
            basic.showIcon(IconNames.Heart)
            basic.pause(1000)
        }
    }
})
