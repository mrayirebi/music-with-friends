import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from './api.service';
import { Player } from './models';

@Component({
  templateUrl: 'app/home.component.html',
  providers: [ApiService]
})
export class HomeComponent  {

  constructor(
      private router: Router,
      private apiService: ApiService
  ) {}

  enterGame(playerName: any) {
    var join_game_result = this.apiService.postJoinGame(playerName);
    localStorage.setItem('player', JSON.stringify(join_game_result.player));
    this.router.navigate(['/play', join_game_result.gameId]);
  }
}
