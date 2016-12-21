import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/home.component.html',
})
export class AppComponent  {

  playerName = '';

  enterGame(playerName: any) {
    this.playerName = playerName;
    alert('Your name is '+playerName);
  }
}
