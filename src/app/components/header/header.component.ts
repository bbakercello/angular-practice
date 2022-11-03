import { Component, OnInit } from '@angular/core';

@Component({
  //called in main  app component, no import statement needed
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Task Tracker';
  constructor() { }

  // to run on load of component, use this
  ngOnInit(): void {
  }

}
