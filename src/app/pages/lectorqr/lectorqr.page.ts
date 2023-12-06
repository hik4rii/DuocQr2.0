import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner,BarcodeFormat,LensFacing, Barcode } from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lectorqr',
  templateUrl: './lectorqr.page.html',
  styleUrls: ['./lectorqr.page.scss'],
})
export class LectorqrPage implements OnInit {
  langs: string[] = [];
  idioma!: string;

  isSupported = true;
  barcode: Barcode | null = null;

  constructor(private alertController: AlertController, private translateService: TranslateService, private router: Router) {this.langs = this.translateService.getLangs(); }

  ngOnInit() {
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });
  }

  async scan(): Promise<void> {
    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentAlert();
      return;
    }
    const { barcodes } = await BarcodeScanner.scan();
    // this.barcodes.push(...barcodes);
    if (barcodes.length > 0) {
      this.barcode = barcodes[0]; // Actualiza el valor del objeto barcode
    }this.router.navigate(['/presente'])
  }

  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  public async installGoogleBarcodeScannerModule(): Promise<void> {
    await BarcodeScanner.installGoogleBarcodeScannerModule();
  }

  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permission denied',
      message: 'Please grant camera permission to use the barcode scanner.',
      buttons: ['OK'],
    });
    await alert.present();
  }


}