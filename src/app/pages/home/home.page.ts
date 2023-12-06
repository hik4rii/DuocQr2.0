import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MensajeService } from 'src/app/services/mensajes/mensaje.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Api2Service } from 'src/app/services/api2/api2.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  langs: string[] = [];
  idioma!: string;

  emailValue: string | undefined;
  passValue: string | undefined;

  latitude: number = 0; 
  longitude: number = 0;

  originalAirQualityData: any[] = []; 
  airQualityData: any[] = [];
  uniqueNames: string[] = [];
  selectedName: string = '';


  constructor(private mensajeUtil: MensajeService,
    private router: Router,
    private translateService: TranslateService,
    private geolocation: Geolocation,
    private airQualityService: Api2Service
    ) {
      this.langs = this.translateService.getLangs();
    }
  ngOnInit() {

    this.loadAirQualityData();
    
    this.obtenerGeolocalizacion()
  }

  changeLang(event:any){
    this.translateService.use(event.detail.value)
  }

  obtenerGeolocalizacion() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
    }).catch((error) => {
      console.error('Error al obtener la geolocalización', error);
    });
  }

  loadAirQualityData() {
    this.airQualityService.getAirQualityData().subscribe(
      (data) => {
        this.originalAirQualityData = [...data]; 
        this.uniqueNames = this.airQualityService.getUniqueNames(data);
      },
      (error) => {
        console.error('Error fetching air quality data:', error);
      }
    );
  }

  onSearch() {
    if (this.selectedName) {
      this.airQualityData = this.airQualityService.filterDataByName(this.originalAirQualityData, this.selectedName);
    } else {
      this.airQualityData = [...this.originalAirQualityData]; 
    }
  }
}
