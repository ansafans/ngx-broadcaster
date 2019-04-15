import { Component, OnInit } from '@angular/core';
import { NgBroadcasterService } from 'projects/ng-broadcaster/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ng-broadcaster-lib';

  message:string;

  constructor(private broadcaster:NgBroadcasterService){}
  
  ngOnInit(){
    this.broadcaster.listen('test-event').subscribe(res=>{
      console.log(res);
      this.message = res.message;
    })
  }
}
