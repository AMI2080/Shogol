import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestComponent } from './request.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  {
    path: '',
    component: RequestComponent,
    children: [
      {
        path: 'new',
        component: NewComponent,
      },
      { path: '', redirectTo: 'new', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestRoutingModule {}
