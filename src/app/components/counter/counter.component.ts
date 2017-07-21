import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  @Input() private counter : number;
  @Output() counterChange :  EventEmitter<number>;

  constructor(){
    this.counter = 0;
    this.counterChange = new EventEmitter();
  }

  increment(){
    this.counter = this.counter+1;
    this.counterChange.emit(this.counter);
  }
  decrement(){
    this.counter = this.counter - 1;
    this.counterChange.emit(this.counter);
  }

}
