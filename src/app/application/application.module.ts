import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationComponent } from './application.component';
import { ApplicationRoutingModule } from './application.routing';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [ApplicationComponent, HeaderComponent, SidebarComponent],
  imports: [CommonModule, ApplicationRoutingModule],
})
export class ApplicationModule {}
