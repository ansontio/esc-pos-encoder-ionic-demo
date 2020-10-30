# ESC Pos Encoder Demo (Ionic 5)

A simple ionic 5 demo application to show printing capability into thermal printer by sending a byte code stream into the printer.

## Notes

- Only works on Android / iOS device
- Tested on Epson thermal printer TM-T82
- Works on:
  - Bluetooth connection
  - Ethernet connection

## Library

- [ESC Pos Encoder Ionic ](https://github.com/Ans0n-Ti0/EscPosEncoder)
- [Cordova Socket TCP/IP](https://github.com/blocshop/sockets-for-cordova)
- [Bluetooth Serial](https://ionicframework.com/docs/native/bluetooth-serial)

## Guide

- `git clone https://github.com/Ans0n-Ti0/esc-pos-encoder-ionic-demo`
- navigate into project folder
- `npm install`
- `ionic cordova platform add android`
- `ionic cordova run android`
