import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  sayHello(comName:string){
    console.log("Hello from "+ comName);
    //alert("Hello from "+ comName+" "+AppComponent.name);
    
  }
}
