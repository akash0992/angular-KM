import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()componentType:String;
  @Input()navigation:any;

  @Output()
  change: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
    if (this.componentType == 'Footer') {
      //Navigation
      this.navigation = [{name:"home",route:''},{name:"client",route:''},{name:"service",route:''},{name:"contact",route:''},{name:"faq",route:''}];
    }
  }

  linkClick(item){
    // console.log("clicked me",this);
    this.change.emit(item);
  }

}
