import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FAQRoutingModule } from './faq-routing.module';
import { FAQComponent } from './faq.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FAQRoutingModule
  ],
  declarations: [
    FAQComponent,
  ],
})
export class FAQModule {}
