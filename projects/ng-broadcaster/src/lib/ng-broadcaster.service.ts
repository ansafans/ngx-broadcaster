import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgBroadcasterService {

  private subject:Subject<any> = new Subject();

  constructor(){}

  // Emit event with name and data
  emitEvent(eventName,eventData){

    let event = {
      name: eventName,
      data: eventData
    };

    this.subject.next(event);
  }

  // Broadcast event with emitted event name
  listen(eventName):Observable<any>{
    return new Observable<any>((observer)=>{
      this.subject.subscribe(res=>{
        if(res.name === eventName){
          observer.next(res.data);
        }
      })
    });
  }
}
