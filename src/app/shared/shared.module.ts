import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PageComponent } from './page/page.component';
import { HeaderComponent } from './page/header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './page/footer/footer.component';

const sharedComponents = [PageComponent, HeaderComponent, FooterComponent];

@NgModule({
  imports: [
    CommonModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ],
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
