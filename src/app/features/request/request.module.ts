import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { RequestComponent } from './request.component';
import { NewComponent } from './new/new.component';
import { RequestRoutingModule } from './request-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RequestRoutingModule
  ],
  declarations: [
    RequestComponent,
    NewComponent
  ],
})
export class RequestModule {}
