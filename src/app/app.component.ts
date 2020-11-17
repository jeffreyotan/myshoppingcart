import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myshoppingcart';
  itemToAdd = '';

  onNotify($event) {
    console.log(`Received event: To add ${$event}`);
    this.itemToAdd = $event;

    setTimeout(() => {
      this.itemToAdd = "";
    }, 100);
  }
}
