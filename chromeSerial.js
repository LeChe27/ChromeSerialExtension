'use strict';

console.log("TODO 'chromeSerial.js'");
console.log(navigator.serial);

if ("serial" in navigator) {
    console.log("serial")
    // The Web Serial API is supported.
    //const ports = await navigator.serial.getPorts();
    /*navigator.serial.getPorts(function(devices) {
        console.log(devices);
    });*/
}
