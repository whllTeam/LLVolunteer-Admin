import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  { path: '', pathMatch: 'full', redirectTo: 'admin'},
  { path: '**', redirectTo: 'admin'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
