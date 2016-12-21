import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes }   from '@angular/router';

import { AppComponent }  from './app.component';
import { HomeComponent }  from './home.component';
import { PlayComponent }  from './play.component';
import { NotFoundComponent } from './notfound.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'play/:id', component: PlayComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HomeComponent, PlayComponent, NotFoundComponent ],
  bootstrap:    [ AppComponent ]
  
})
export class AppModule { }

