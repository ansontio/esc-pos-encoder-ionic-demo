import { Component } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import EscPosEncoder from 'esc-pos-encoder-ionic';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  // * Set your variable here
  MAC = '00:0a:95:9d:68:16'; // this is bluetooth printer mac address
  // * End

  constructor() {}

  ionViewDidEnter() {
    // For POC purposes only
    this.testPrintViaBluetooth();
  }

  /**
   *
   */
  testPrintViaBluetooth() {
    // socket receive bytecode, therefore we need to create a byte stream by using esc-pos-encoder-ionic
    const encoder = new EscPosEncoder();
    const result = encoder.initialize();

    result
      .align('center')
      .newline()
      .line('Congratulation, print success')
      .line('Bluetooth MAC : ' + this.MAC)
      .newline()
      .newline()
      .newline()
      .newline()
      .newline()
      .newline()
      .cut();

    const resultByte = result.encode();

    // send byte code into the printer
    BluetoothSerial.connect(this.MAC).subscribe(() => {
      BluetoothSerial.write(resultByte)
        .then(() => {
          console.log('Print success');
        })
        .catch((err) => {
          console.error(err);
        });
    });
  }
}
