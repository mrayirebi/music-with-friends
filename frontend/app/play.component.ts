import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

class SongGuessItem {
    // id - Spotify song id from their API
    // name - Name of the song
    // artist - Artist of the song
    constructor(public id: string, public name: string, public artist: string) {}
}

class GameSong extends SongGuessItem {
    // id - Spotify song id from their API
    // name - Name of the song
    // artist - Artist of the song
    // url - URL to the preview track
    // startTime - Time to start playing the song from.
    //               This is so that if a user joins a game half way through,
    //               they get to list to the song from the same point as everyone else.
    constructor(public id: string, public name: string, public artist: string, public url: string, public startTime = 0) {
        super(id, name, artist);
    }
}

class Player {
    // id - Unique id of the player for this game
    // name - The user supplied name of the player
    // score - The current score of the player (default to 0)
    constructor(public id: string, public name: string, public score = 0) {}
}

class GameInfo {
    // players - The players in the game
    // gameSong - The song all players have to guess
    // guessList - A list of 'wrong' options for the name of the current song
    constructor(public players: Player[], public gameSong: GameSong, public guessList: SongGuessItem[]) {}

    private shuffleArray<T>(array: T[]) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    // Get the full song list to show (the correct answer + the wrong options)
    // then shuffle the array so the correct answer isn't always first!
    getSongList() {
        var song_list: SongGuessItem[] = [this.gameSong];
        song_list = song_list.concat(this.guessList);
        return this.shuffleArray(song_list);
    }
}

@Component({
  templateUrl: 'app/play.component.html',
})
export class PlayComponent {

    gameId = 0;
    gameInfo: GameInfo = null;

    constructor(
    private route: ActivatedRoute,
    private router: Router
    ) {}

    // Get the current song from the server
    getCurrentSong() {
        // TODO Make server API call to get song url and start time:
        // Give server our game ID and server should return info for the GameSong object
        var demo_songs = [
            new GameSong('3Yf8sVkFXThHDtkqtSNbpZ', "Kukere", "Iyanya", 'https://p.scdn.co/mp3-preview/bf9f3b54d335d92d9ddf89be5a20dfcd42ef8220'),
            new GameSong('02tFJS6uq1X1cdxBwzvdqk', "Kontrol - Extended", "Maleek Berry", 'https://p.scdn.co/mp3-preview/8a6248aaafb3b3279022cfdeb417706f1f7e81ed'),
            new GameSong('1i1fxkWeaMmKEB4T7zqbzK', "Don't Let Me Down", "The Chainsmokers", 'https://p.scdn.co/mp3-preview/4f410d4293b502e25df3e782c443d1745382c3da')
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
            new SongGuessItem('weerh3432er', "My New Song 1", "My Artist 1"),
            new SongGuessItem('234tyhgfds', "My New Song 2", "My Artist 2"),
            new SongGuessItem('78trfgs', "My New Song 3", "My Artist 3")
        ];
        return demo_song_guess_list;
    }

    getGameInfo() {
        return new GameInfo(this.getPlayers(), this.getCurrentSong(), this.getSongGuessList());
    }

    ngOnInit() {
        // (+) converts string 'id' to a number
        let id = +this.route.snapshot.params['id'];
        this.gameId = id;
        this.gameInfo = this.getGameInfo();
        console.log(this.gameInfo);
        // TODO Add 3 sec delay before the song plays
    }

}
