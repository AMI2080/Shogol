import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PageComponent } from './page/page.component';
import { HeaderComponent } from './page/header/header.component';
import { SearchComponent } from './page/header/search/search.component';
import { FooterComponent } from './page/footer/footer.component';

const sharedComponents = [
  PageComponent,
  HeaderComponent,
  SearchComponent,
  FooterComponent,
];

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
