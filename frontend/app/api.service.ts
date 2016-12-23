import { Injectable } from '@angular/core';

import { GameInfo, GameSong, Player, SongGuessItem } from './models';
import { GAME, CORRECT_GUESS_ID } from './mock-api-data';

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

    postGuess(gameId: number, playerId: number, songId: string): any {
        var guess_correct = (songId == CORRECT_GUESS_ID);
        var points_to_gain = 5;
        // modify the player points if correct
        for (var i = 0; i < GAME.players.length; i++) {
            if (playerId == GAME.players[i].id) {
                if (guess_correct) {
                    GAME.players[i].score += points_to_gain;
                }
                break;
            }
        }
        return {'guess_correct': guess_correct};
    }

}
