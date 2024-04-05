input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Asleep)
    music.play(music.stringPlayable("G A F G B C5 G C5 ", 120), music.PlaybackMode.UntilDone)
})
