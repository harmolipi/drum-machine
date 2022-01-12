# Drum Machine

Created as part of [freeCodeCamp](https://www.freecodecamp.org) curriculum.

View on [Github](https://github.com/harmolipi/drum-machine).

## Functionality

This is the [Drum Machine](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-drum-machine) project, where I make a drum machine that plays sounds when you press or click the corresponding button.

## Thoughts

As with the past few projects, things like this seem easier now that I'm building them with React, versus vanilla Javascript before. That said though, the part of this which seems most tenuous is the relationship between clicks, keypresses, and the drum pads. If I return to this, I should probably try and refactor them.

I also ran into some issues with functions being called before the state was changed, hence my `play` state variable in `DrumMachine`. In order to get `playAudio()` to run _after_ my `drumKey` state variable was set, I had to set my `play` variable to `true` after setting `drumKey`, and then use `useEffect()` to have `playAudio()` run whenever `play` is changed, and then change `play` back to `false`. Again, feels tenuous stringing this many different things together, so not sure that it's the best way to do it.

God bless.

-Niko Birbilis
