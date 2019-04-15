# NGX BROADCASTER LIBRARY

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**NGX BROADCASTER** is a library that provides the service for Angular applications to access global emitted events from components, service etc..

## Installation

```
npm install ngx-broadcaster
```

Refer NPM package <a href="https://www.npmjs.com/package/ngx-broadcaster">here</a>.

## Usage

```
import { NgBroadcasterModule } from 'ngx-broadcaster';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    NgBroadcasterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
```

## Example

Sample.component.html
```html

<button (click)="sendMessage()">Send Message</button>

```

Sample.component.ts
```typescript

// Selector : app-component

constructor(private broadcaster:NgBroadcasterService) {}

ngOnInit() {}

sendMessage(){
    let data = {
        message:"Hello World"
    }

    this.broadcaster.emitEvent('test-event',data);
}

```

App.component.html

```
<h1>{{message}}</h1>
<br>
<app-sample></app-sample>
```

App.component.ts

```typescript

public message:string;

constructor(private broadcaster:NgBroadcasterService){}
  
ngOnInit(){
    this.broadcaster.listen('test-event').subscribe(res=>{
        this.message = res.message;
    })
}

```

## API Reference

*Event Payload Interface*

```
export interface EventPayload{
    eventName:string;
    eventData:any;
}
```

## License

This project is licensed under the terms of the MIT license.


## Further help

If you have ideas for more that should be on this page, <a href="https://github.com/ansafans/Ng-Broadcaster/issues">let me know</a>