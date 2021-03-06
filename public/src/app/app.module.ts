import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UserService } from './user/user.service'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserNewComponent,
    UserListComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
