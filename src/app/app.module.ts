import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserAuthModule } from './user-auth/user-auth.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { UserListComponent } from './MyComponents/user-list/user-list.component';
import { StudentsListComponent } from './MyComponents/students-list/students-list.component';
import { CountryListComponent } from './MyComponents/country-list/country-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    UserListComponent,
    StudentsListComponent,
    CountryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
