import {
  Component, OnInit, Input, Output, OnChanges, OnDestroy, SimpleChanges, AfterContentInit,
  DoCheck, AfterContentChecked, AfterViewInit, AfterViewChecked
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit, OnChanges, OnDestroy, AfterContentInit, DoCheck, AfterContentChecked, AfterViewInit, AfterViewChecked {
  ngAfterContentInit(): void {
    console.log('after content init called');
  }

  ngDoCheck(): void {
    console.log('do check called');
  }

  ngAfterContentChecked(): void {
    console.log('after content checked called');
  }

  ngAfterViewInit(): void {
    console.log('after view init');
  }

  ngAfterViewChecked(): void {
    console.log('after view checked');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes called: ', changes);
  }

  ngOnDestroy(): void {
    console.log('on destroy called: ');
  }

  @Input() selected:any;
  @Input() parentCount: number;
  @Input('someString') myString: string;

  rForm: FormGroup;
  addTodoFlag: boolean;

  constructor(private fb: FormBuilder, private _todoService : TodoService) {
    this.parentCount = 40;
    this.myString = 'Test';
    this.addTodoFlag = false;
    this.rForm = fb.group({
      'name' : [null, Validators.required],
      'description' : [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      'validate' : ''
    });
  }

  addTodo(_todo) {
    this._todoService.addTodo({
      name: _todo.name,
      description: _todo.description,
      status: 'pending'
    });
    this.rForm.reset();
    this.addTodoFlag = false;
  }

  toggleFlag() {
    this.addTodoFlag = !this.addTodoFlag;
  }

  ngOnInit() {
    console.log('on init called');
  }


}
