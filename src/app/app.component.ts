import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mes tâches';
  tabs: any = [{ label: "livre a kilogramme", link: "/a" }, { label: "fahrenheit a celcius", link: "/b" }]
}
