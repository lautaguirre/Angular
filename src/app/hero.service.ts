import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { HeroList } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  heroList: Hero[];

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  getHeroes(): Observable<Hero[]>{
    this.messageService.add('Fetched heroes');
    return of(HeroList);
  }

  getHero(id: number): Observable<Hero>{
    this.messageService.add('Fetched hero id=' + id);
    return of(HeroList.find( hero => hero.id === id));
  }
}
