import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GameInfo, GameSong, Player, SongGuessItem } from './models';
import { ApiService } from './api.service';

enum PlayMode {
  GUESSING,
  GUESSED_CORRECT,
  GUESSED_WRONG
}

@Component({
  templateUrl: 'app/play.component.html',
  providers: [ApiService]
})
export class PlayComponent {

    gameId: number;
    gameInfo: GameInfo;
    currentPlayMode: PlayMode;

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private apiService: ApiService
    ) {}

    refreshGameInfo() {
      this.gameInfo = this.apiService.getGameInfo(this.gameId);
    }

    ngOnInit() {
        // (+) converts string 'id' to a number
        let id = +this.route.snapshot.params['id'];
        this.gameId = id;
        this.refreshGameInfo();
        this.currentPlayMode = PlayMode.GUESSING;
        // TODO Should poll for getting the game info
        // TODO Add 3 sec delay before the song plays
    }

    makeGuess(guessItem: SongGuessItem) {
      var playerId = JSON.parse(localStorage.getItem('player')).id;
      var result = this.apiService.postGuess(this.gameInfo.id, playerId, guessItem.id);
      if (result.guess_correct) {
        this.currentPlayMode = PlayMode.GUESSED_CORRECT;
      } else {
        this.currentPlayMode = PlayMode.GUESSED_WRONG;
      }
      this.refreshGameInfo();
    }

}
