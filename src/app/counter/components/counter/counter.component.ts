import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
    selector: 'app-counter',
    template: `
    <h3>counter: {{counter}}</h3>

    <button (click)="incrementar(+1)" >+1</button>

    <button (click)="reserNum()">Reset</button>

    <button (click)="incrementar(-1)">-1</button>
    `
})

export class CounterComponent {
    public counter: number = 15;

    public incrementar(value: number): void {
      this.counter += value
      console.log(this.counter)
    }
  
    public reserNum(): void {
      this.counter = 10;
      console.log(this.counter)
    }
}