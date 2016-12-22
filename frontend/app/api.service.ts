import { Injectable } from '@angular/core';

import { GameInfo, GameSong, Player, SongGuessItem } from './models';
import { GAMES } from './mock-api';

@Injectable()
export class ApiService {
    getGameInfo(id: number): GameInfo {
        // return GAMES[id];
        return new GameInfo(id, this.getPlayers(), this.getCurrentSong(), this.getSongGuessList());
    }

    // Get the current song from the server
    getCurrentSong() {
        // TODO Make server API call to get song url and start time:
        // Give server our game ID and server should return info for the GameSong object
        var demo_songs = [
            new GameSong('https://p.scdn.co/mp3-preview/bf9f3b54d335d92d9ddf89be5a20dfcd42ef8220'),
            new GameSong('https://p.scdn.co/mp3-preview/8a6248aaafb3b3279022cfdeb417706f1f7e81ed'),
            new GameSong('https://p.scdn.co/mp3-preview/4f410d4293b502e25df3e782c443d1745382c3da')
        ];
        // For now, choose a random song from the list of demo songs
        return demo_songs[Math.floor(Math.random() * demo_songs.length)];
    }

    getPlayers() {
        var demo_players = [
            new Player('1', 'Derek'),
            new Player('2', 'Gilbert'),
            new Player('3', 'Joel')
        ];
        return demo_players;
    }

    getSongGuessList() {
        var demo_song_guess_list = [
            new SongGuessItem('3Yf8sVkFXThHDtkqtSNbpZ', "Kukere", "Iyanya"),
            new SongGuessItem('02tFJS6uq1X1cdxBwzvdqk', "Kontrol - Extended", "Maleek Berry"),
            new SongGuessItem('1i1fxkWeaMmKEB4T7zqbzK', "Don't Let Me Down", "The Chainsmokers"),
            new SongGuessItem('weerh3432er', "My New Song 1", "My Artist 1"),
            new SongGuessItem('234tyhgfds', "My New Song 2", "My Artist 2"),
            new SongGuessItem('78trfgs', "My New Song 3", "My Artist 3")
        ];
        return demo_song_guess_list;
    }

}
