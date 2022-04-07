import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sidebar';
  navChanged = true;
  navMsg!: any;
  sidebarExpanded = true;
  dataVal: any = localStorage.getItem('loginUser');
  getUserData = JSON.parse(this.dataVal);

  navIconClick() {
    this.navChanged = !this.navChanged;
    // this.postService.changedNav(this.navChanged);
  }
}
