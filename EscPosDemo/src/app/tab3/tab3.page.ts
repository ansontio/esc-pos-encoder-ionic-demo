import { Component } from '@angular/core';
import EscPosEncoder from 'esc-pos-encoder-ionic';

declare var Socket: any;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  // * Set your variable here
  IP = '192.168.100.89';
  PORT = '9100';
  // * End

  constructor() {}

  ionViewDidEnter() {
    // For POC purposes only
    this.testPrint();
  }

  /**
   *
   */
  testPrint() {
    const socket = new Socket();

    // socket receive bytecode, therefore we need to create a byte stream by using esc-pos-encoder-ionic
    const encoder = new EscPosEncoder();
    const result = encoder.initialize();

    result
      .align('center')
      .newline()
      .line('Congratulation, print success')
      .line('IP : ' + this.IP)
      .line('Port : ' + this.PORT)
      .newline()
      .newline()
      .newline()
      .newline()
      .newline()
      .newline()
      .cut();

    const resultByte = result.encode();

    // send byte code into the printer
    socket.open(
      this.IP,
      this.PORT,
      () => {
        socket.write(resultByte, () => {
          socket.shutdownWrite();
        });
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
