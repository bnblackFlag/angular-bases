import { NgModule } from "@angular/core";
import { HeroesListComponent } from "./list/heroes-list.component"; 
import { HeroComponent } from "./hero/hero.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        HeroesListComponent,
        HeroComponent
    ], exports: [
        HeroesListComponent,
        HeroComponent
    ], imports: [
        CommonModule
    ]

})
export class HeroesModule {}