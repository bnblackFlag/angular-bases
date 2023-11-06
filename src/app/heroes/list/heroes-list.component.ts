import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent {

  public deletedHero?: string = '';

  public heroNames: string[] = [
    'Spideman',
    'Batman',
    'Superman',
    'Hulk',
    'She Hulk',
    'Wonderwoman',
    'Catwoman'
  ]

  eliminarHeroe():void {
    this.deletedHero =this.heroNames.pop()
  }

}
