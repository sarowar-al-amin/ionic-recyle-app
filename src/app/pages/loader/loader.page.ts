import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {
  // router: any;

  constructor(private router: Router) { }

  ngOnInit() {
    // console.log(`We are in loader page`);
    setTimeout(()=>{
      this.router.navigate(['login']);
    }, 1000);
  }

}
