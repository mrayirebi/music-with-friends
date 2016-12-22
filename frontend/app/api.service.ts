import { Injectable } from '@angular/core';

import { GameInfo, GameSong, Player, SongGuessItem } from './models';
import { GAME } from './mock-api-data';

@Injectable()
export class ApiService {

    postJoinGame(playerName: string): any {
        var newPlayer = new Player(4, playerName);
        GAME.players.push(newPlayer);
        return {'player': newPlayer, 'gameId': 1}
    }

    getGameInfo(id: number): GameInfo {
        return GAME;
    }

}
