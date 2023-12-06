import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cartahome',
  templateUrl: './cartahome.component.html',
  styleUrls: ['./cartahome.component.scss'],
})
export class CartahomeComponent implements OnInit {
  langs: string[] = [];
  idioma!: string;

  @Input() titulo!: string;
  @Input() descripcion!: string;
  constructor(
    private translateService: TranslateService
    ) {
      this.langs = this.translateService.getLangs();
    }

  ngOnInit() { }

}
