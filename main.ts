radio.setGroup(10)
basic.forever(function () {
    if (ModuleWorld_Analog.Rocker(ModuleWorld_Analog.mwAnalogNum.AP0P1, ModuleWorld_Analog.enRocker.Up)) {
        radio.sendNumber(1)
    } else if (ModuleWorld_Analog.Rocker(ModuleWorld_Analog.mwAnalogNum.AP0P1, ModuleWorld_Analog.enRocker.Down)) {
        radio.sendNumber(2)
    } else if (ModuleWorld_Analog.Rocker(ModuleWorld_Analog.mwAnalogNum.AP2P3, ModuleWorld_Analog.enRocker.Left)) {
        radio.sendNumber(3)
    } else if (ModuleWorld_Analog.Rocker(ModuleWorld_Analog.mwAnalogNum.AP2P3, ModuleWorld_Analog.enRocker.Right)) {
        radio.sendNumber(4)
    } else if (ModuleWorld_Analog.Rocker(ModuleWorld_Analog.mwAnalogNum.AP2P3, ModuleWorld_Analog.enRocker.NoState)) {
        radio.sendNumber(5)
    } else if (ModuleWorld_Analog.Rocker(ModuleWorld_Analog.mwAnalogNum.AP0P1, ModuleWorld_Analog.enRocker.NoState)) {
        radio.sendNumber(5)
    } else {
    	
    }
})
