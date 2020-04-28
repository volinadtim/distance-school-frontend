import { RouterModule, Routes } from '@angular/router';

import { DirectorGuard } from '@core/guards/director.guard';
import { MgtComponent } from './mgt.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: MgtComponent,
    children: [
      {
      {
        path: 'profile',
        loadChildren: () =>
          import('../profile/profile.module').then((m) => m.ProfileModule),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('../users/users.module').then((m) => m.UsersModule),
        canActivate: [DirectorGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MgtRoutingModule {}
