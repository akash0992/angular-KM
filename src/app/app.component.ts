import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'app';

  page:any;
  headerData:any = [
    {
      name: 'Home', route: ''
    },
    {
      name: 'TODO 1', route: ''
    },
    {
      name: 'TODO 2', route: ''
    },
    {
      name: 'TODO 3', route: ''
    }
  ];

  footerData:any = [
    {
      name: 'TODO 3', route: ''
    },
    {
      name: 'TODO 2', route: ''
    },
    {
      name: 'TODO 1', route: ''
    },
    {
      name: 'Home', route: ''
    }
  ];

  selectedPage(currentPage){
    this.page = currentPage;
  }
}
