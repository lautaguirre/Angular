import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroList } from '../mock-heroes'; 
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroList: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroService.getHeroes()
      .subscribe(heroList => this.heroList = heroList);
  }

  add(name: string): void{
    name = name.trim();
    if(!name){ return; }
    this.heroService.addHero({name} as Hero)
      .subscribe(hero => {
        this.heroList.push(hero);
      });
  }

  delete(hero: Hero): void{
    if(this.heroList.length > 1){
      this.heroList = this.heroList.filter(h => h !== hero);
      this.heroService.deleteHero(hero).subscribe();
    }
  }

}
