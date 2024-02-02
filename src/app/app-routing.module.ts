import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'requests',
    loadChildren: () =>
      import('./features/request/request.module').then((m) => m.RequestModule),
  },
  {
    path: 'faq',
    loadChildren: () =>
      import('./features/faq/faq.module').then((m) => m.FAQModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
