/*
console.log("TODO 'chromeSerial.js'");

if ("serial" in navigator) {
    console.log("serial")
    // The Web Serial API is supported.
    //const ports = await navigator.serial.getPorts();
    navigator.serial.getPorts(function(devices) {
        console.log(devices);
    });
}
*/

'use strict';

let mcu_port;

document.addEventListener('DOMContentLoaded', () => {
    const notSupported = document.getElementById('notSupported');
    notSupported.classList.toggle('hidden', 'serial' in navigator);
});

navigator.serial.addEventListener("disconnect", e => {
    document.getElementById("disconnect-mcu-button").style.backgroundColor = 'rgb(255, 0, 0)';
    document.getElementById("connect-mcu-button").style.backgroundColor = 'rgb(255, 255, 255)';
    document.getElementById('connect-mcu-button').disabled = true;

});
navigator.serial.addEventListener('connect', e => {
    document.getElementById("disconnect-mcu-button").style.backgroundColor = 'rgb(255, 2550, 255)';
    document.getElementById("connect-mcu-button").style.backgroundColor = 'rgb(255, 255, 255)';
    document.getElementById('connect-mcu-button').disabled = false;
});

async function mcuConnect() {
    navigator.serial.requestPort()
        .then(async (port) => {
            mcu_port = port
            await mcu_port.open({ baudRate: 115200 });
            document.getElementById("connect-mcu-button").style.backgroundColor = 'rgb(0, 255, 0)';
        })
        .catch(error => {
            //
        });
}

async function mcuDisconnect() {
    if (mcu_port) {
        mcu_port.close()
        document.getElementById("connect-mcu-button").style.backgroundColor = 'rgb(255, 255, 255)';
    }
}
