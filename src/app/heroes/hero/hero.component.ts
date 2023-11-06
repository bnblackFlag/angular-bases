import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {


  public nombre: string = 'ironman';
  public edad: number = 45;
  public nombreCapitalizado: string = this.nombre.toUpperCase();


  get capitalizedName(): string {
    return this.nombre.toUpperCase()
  }

  getHeroDescription(): string {
    return `${this.nombre} - ${this.edad}`
  }

  changeHero(): void {
    this.nombre = 'spiderman'
    console.log(this.nombre)
  }

  changeAge(): void {
    this.edad = 25
    console.log(this.edad)
  }

  resetForm():void {
    this.nombre = 'Ironman'
    this.edad = 45
  }

}
