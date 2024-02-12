import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { OffersComponent } from './offers/offers.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

@NgModule({
  imports: [CommonModule, FormsModule, SharedModule, ProfileRoutingModule],
  declarations: [ProfileComponent, MyProfileComponent, OffersComponent],
})
export class ProfileModule {}
