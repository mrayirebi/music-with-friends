import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  templateUrl: 'app/play.component.html',
})
export class PlayComponent {

    gameId = 0;
    songUrl = '';

    constructor(
    private route: ActivatedRoute,
    private router: Router
    ) {}

    ngOnInit() {
        // (+) converts string 'id' to a number
        let id = +this.route.snapshot.params['id'];
        this.gameId = id;
        this.songUrl = 'https://p.scdn.co/mp3-preview/8a6248aaafb3b3279022cfdeb417706f1f7e81ed';
    }

}
