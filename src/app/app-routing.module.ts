import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'profile',
    loadChildren: () =>
      import('./features/profile/profile.module').then((m) => m.ProfileModule),
  },
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
  {
    path: 'terms-of-use',
    loadChildren: () =>
      import('./features/terms-of-use/terms-of-use.module').then(
        (m) => m.TermsOfUseModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
