import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AnimatedSearchComponent } from './component/animated-search/animated-search.component';

@NgModule({
  declarations: [AnimatedSearchComponent],
  exports: [AnimatedSearchComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class CoreModule {}
