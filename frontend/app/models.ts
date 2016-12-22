export class SongGuessItem {
    // id - Spotify song id from their API
    // name - Name of the song
    // artist - Artist of the song
    constructor(public id: string, public name: string, public artist: string) {}
}

export class GameSong {
    // url - URL to the preview track
    // startTime - Time to start playing the song from.
    //               This is so that if a user joins a game half way through,
    //               they get to list to the song from the same point as everyone else.
    constructor(public url: string, public startTime = 0) {}
}

export class Player {
    // id - Unique id of the player for this game
    // name - The user supplied name of the player
    // score - The current score of the player (default to 0)
    constructor(public id: number, public name: string, public score = 0) {}
}

export class GameInfo {

    public shuffledSongList: SongGuessItem[];

    // players - The players in the game
    // gameSong - The song all players have to guess
    // guessList - A list of options for the name of the current song
    constructor(
        public id: number,
        public players: Player[],
        public gameSong: GameSong,
        public guessList: SongGuessItem[]) {
            this.shuffledSongList = this.shuffleArray(this.guessList);
        }

    private shuffleArray<T>(array: T[]) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

}
