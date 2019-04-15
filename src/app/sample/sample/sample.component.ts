import { Component, OnInit } from '@angular/core';
import { NgBroadcasterService } from 'projects/ng-broadcaster/src/public_api';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor(private broadcaster:NgBroadcasterService) {}

  ngOnInit() {}

  sendMessage(){
    let data = {
      message:"Hello World"
    }

    this.broadcaster.emitEvent('test-event',data);
  }

}
