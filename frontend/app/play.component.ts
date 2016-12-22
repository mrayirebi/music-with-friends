import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GameInfo, GameSong, Player, SongGuessItem } from './models';
import { ApiService } from './api.service';

@Component({
  templateUrl: 'app/play.component.html',
  providers: [ApiService]
})
export class PlayComponent {

    gameInfo: GameInfo;

    constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
    ) {}

    ngOnInit() {
        // (+) converts string 'id' to a number
        let id = +this.route.snapshot.params['id'];
        this.gameInfo = this.apiService.getGameInfo(id);
        console.log(this.gameInfo);
        // TODO Add 3 sec delay before the song plays
    }

}
