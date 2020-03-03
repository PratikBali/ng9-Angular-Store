import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BookListComponent } from './book-list/book-list.component';
import { reducer } from './reducer/sample.reducer';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    StoreModule.forRoot({
      sample: reducer // matching action and return state
    })
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    BookListComponent,
    ReadComponent,
    CreateComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
