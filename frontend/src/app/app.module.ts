import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* Importing Angular Material for use in project */
import { MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Importing Router Module and Routes */
import { RouterModule } from '@angular/router';
import { routes } from './app-routes';

/* Importing HTTP modules for communicating with the server */
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    EditComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
