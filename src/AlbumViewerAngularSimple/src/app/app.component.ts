import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  time = new Date();
  name = 'Rick';

  interval = setInterval(
  	  () => this.time = new Date(),
	  1000);
}
