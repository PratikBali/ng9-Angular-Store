import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BookListComponent } from './book-list/book-list.component';

const routes: Routes = [
  { component: LoginComponent, path: '' },
  { component: LoginComponent, path: 'login' },
  { component: BookListComponent, path: 'book-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
