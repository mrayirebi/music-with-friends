import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'app/home.component.html',
})
export class HomeComponent  {

  playerName = '';

  constructor(private router: Router) {}

  getGameId() {
    // TODO Should get this game id from the server
    return Math.floor((Math.random() * 1000) + 1);
  }

  enterGame(playerName: any) {
    this.playerName = playerName;
    var gameId = this.getGameId();
    this.router.navigate(['/play', gameId]);
  }
}
