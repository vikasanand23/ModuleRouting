import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss'],
})
export class ApplicationComponent implements OnInit {
  navChanged = true;
  navMsg!: any;
  subscription!: Subscription;
  sidebarExpanded = true;
  dataVal: any = localStorage.getItem('loginUser');
  getUserData = JSON.parse(this.dataVal);

  constructor() {}

  ngOnInit(): void {
    // this.commanService.loginUserInfo(this.getUserData);
    // this.subscription = this.postService.navMessage.subscribe(
    //   (nav) => (this.navMsg = nav)
    // );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  navIconClick() {
    this.navChanged = !this.navChanged;
    // this.postService.changedNav(this.navChanged);
  }
}
