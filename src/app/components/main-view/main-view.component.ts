import {
  Component, OnInit, Input, Output, OnChanges, OnDestroy, SimpleChanges, AfterContentInit,
  DoCheck, AfterContentChecked, AfterViewInit, AfterViewChecked
} from '@angular/core';

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

  constructor() {
    this.parentCount = 40;
    this.myString = 'Test';
  }

  ngOnInit() {
    console.log('on init called');
  }


}
