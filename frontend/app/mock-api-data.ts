import { GameInfo, GameSong, Player, SongGuessItem } from './models';

var _getCurrentSong = function() {
    var demo_songs = [
        new GameSong('https://p.scdn.co/mp3-preview/bf9f3b54d335d92d9ddf89be5a20dfcd42ef8220'),
        new GameSong('https://p.scdn.co/mp3-preview/8a6248aaafb3b3279022cfdeb417706f1f7e81ed'),
        new GameSong('https://p.scdn.co/mp3-preview/4f410d4293b502e25df3e782c443d1745382c3da'),
        new GameSong('https://p.scdn.co/mp3-preview/b2ef863a52ba8960d315847c353ab5da1b1874a1')
    ];
    return demo_songs[2];
};

var _getPlayers = function() {
    var players = [
        new Player(1, 'Blue Whale'),
        new Player(2, 'Red Tiger'),
        new Player(3, 'Yellow Cat')
    ];
    return players;
}

export const CORRECT_GUESS_ID: string = '1i1fxkWeaMmKEB4T7zqbzK';

export const GAME: GameInfo = new GameInfo(1, _getPlayers(), _getCurrentSong(), [
        new SongGuessItem('3Yf8sVkFXThHDtkqtSNbpZ', "Kukere", "Iyanya"),
        new SongGuessItem('02tFJS6uq1X1cdxBwzvdqk', "Kontrol - Extended", "Maleek Berry"),
        new SongGuessItem('1i1fxkWeaMmKEB4T7zqbzK', "Don't Let Me Down", "The Chainsmokers"),
        new SongGuessItem('7KWRfL1XSV16Pa5wKr6tZO', "Adonai (Remix)", "DJ Stretch")
    ]);
