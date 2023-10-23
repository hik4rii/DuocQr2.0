import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.page.html',
  styleUrls: ['./terms.page.scss'],
})
export class TermsPage implements OnInit {

  constructor(private router:Router) { }

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
}
