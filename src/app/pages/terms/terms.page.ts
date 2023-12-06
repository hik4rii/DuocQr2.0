import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.page.html',
  styleUrls: ['./terms.page.scss'],
})
export class TermsPage implements OnInit {
  langs: string[] = [];
  idioma!: string;

  constructor(private router:Router,private translateService: TranslateService) {
    this.langs = this.translateService.getLangs();
   }

  ngOnInit() {
  }

  login() {
    this.router.navigate(['login']);
  }

  checkedbtn : boolean = false

  changeEvent(event:any) {
    if (event.value) {
      this.checkedbtn = false;
    }else{
      this.checkedbtn = true;
    }
    
}
  changeLang(event:any){
  this.translateService.use(event.detail.value)
  }
}
