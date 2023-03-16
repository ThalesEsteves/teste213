import { Component, OnInit} from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { MapDatabaseService } from 'src/app/services/map-database.service';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-select-map',
  templateUrl: './select-map.page.html',
  styleUrls: ['./select-map.page.scss'],
})
export class SelectMapPage implements OnInit {
  scanactive: boolean = false;

  constructor(private service: MapDatabaseService) { }

  async ngOnInit() { }
  
  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
    });

    const theActualPicture = image.dataUrl;
  }
  download(){
    this.service.getmapsimages()
    
  }
  
  async checkPermission() { 
    return new Promise(async (resolve, reject) => {
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        resolve(true);
      } else if (status.denied) { 
        BarcodeScanner.openAppSettings();
        resolve(false);
      }
    });
  }

  async startScanner() {
    const allowed = await this.checkPermission();

    if (allowed) {
      this.scanactive = true
      BarcodeScanner.hideBackground();

      const result = await BarcodeScanner.startScan();
      const image = await Camera.getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
      });
      const theActualPicture = image.dataUrl;

      if (result.hasContent) {
        this.scanactive = false;
        alert(result.content);
      } else {
        alert('NO DATA')
      }
    } else { 
      alert('NOT ALLOWED')
    }  
  }

  stopScanner() { 
    BarcodeScanner.stopScan();
    this.scanactive = false;
  }

  ionViewWillLeave() { 
    BarcodeScanner.stopScan();
    this.scanactive = false
  }
}
