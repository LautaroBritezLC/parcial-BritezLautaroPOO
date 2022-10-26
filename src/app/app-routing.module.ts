import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-objets', pathMatch: 'full' },
  { path: 'list-objets', component: ListComponent },
  { path: 'create-objets', component: CreateComponent },
  { path: 'edit-objets/:id', component: CreateComponent },
  { path: '**', redirectTo: 'list-objets', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
