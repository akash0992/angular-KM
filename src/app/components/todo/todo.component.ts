import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() private todo: any;
  @Input() private visible: boolean;
  @Output() private toggleDescription: EventEmitter<boolean>;

  constructor() {
    this.toggleDescription = new EventEmitter();
  }

  toggle() {
    this.visible = !this.visible;
    this.toggleDescription.emit(this.visible);
  }

  ngOnInit() {
  }


}
