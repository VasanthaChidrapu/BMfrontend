import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { SaveBookComponent } from './save-book/save-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';

const routes: Routes = [
  {path:'books',component:BookListComponent},
  {path:'save-book',component:SaveBookComponent},
  {path:'', redirectTo:'books',pathMatch:'full'},
  {path:'update-book/:book_id',component:UpdateBookComponent},
  {path:'book-details/:book_id',component:BookDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
