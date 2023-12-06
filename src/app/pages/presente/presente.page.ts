import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-presente',
  templateUrl: './presente.page.html',
  styleUrls: ['./presente.page.scss'],
})
export class PresentePage implements OnInit {
  langs: string[] = [];
  idioma!: string;

  constructor(private translateService: TranslateService, private router: Router) {this.langs = this.translateService.getLangs();}

  ngOnInit() {
  }

  

}
