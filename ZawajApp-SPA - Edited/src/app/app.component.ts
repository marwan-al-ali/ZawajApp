import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  colors = ['Red','White','Green','Yellow'];

  name = 'Marwan Al Ali';

  age = 38;

  currentDate=new Date();

  source='https://tasdidsyria.com/App_Themes/TasdidTheme/Images/TasdidHeaderLogo.gif';

  isAuth=false;

  logState='Login';

  toggle(){
    this.isAuth = !this.isAuth;
    this.logState = this.isAuth? 'Logout' : 'Login';
  }

  myFunction(){
    alert('Welcom')
  }

  onChange(){}
}
