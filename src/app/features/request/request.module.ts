import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { RequestComponent } from './request.component';
import { NewComponent } from './new/new.component';
import { RequestRoutingModule } from './request-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RequestRoutingModule,
    NgSelectModule,
    FormsModule,
  ],
  declarations: [RequestComponent, NewComponent],
})
export class RequestModule {}
