import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PageComponent } from './page/page.component';

const sharedComponents = [PageComponent];

@NgModule({
  imports: [CommonModule, NgSelectModule, ReactiveFormsModule, FormsModule],
  declarations: [
    // components
    ...sharedComponents,
  ],
  exports: [
    // components
    ...sharedComponents,
  ],
})
export class SharedModule {}
