import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-animated-search',
  templateUrl: './animated-search.component.html',
  styleUrls: ['./animated-search.component.scss'],
})
export class AnimatedSearchComponent implements OnInit {
  @Input() searchTxt: any;
  expandedState: any = false;
  // searchTxt: any = 'sdsdsdsdsdsdsdsd';
  constructor() {}

  ngOnInit(): void {}

  focusIn(e: any) {
    this.expandedState = true;
    console.log('expand', this.expandedState);
  }
  focusOut(e: any) {
    this.expandedState = false;
    console.log('show', this.expandedState);
  }
}
