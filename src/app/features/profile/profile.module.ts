import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { OffersComponent } from './offers/offers.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ProfileRoutingModule,
    NgSelectModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule,
  ],
  declarations: [
    ProfileComponent,
    MyProfileComponent,
    OffersComponent,
    EditProfileComponent,
  ],
})
export class ProfileModule {}
