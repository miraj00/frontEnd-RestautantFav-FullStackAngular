import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { AddOrderFormComponent } from './add-order-form/add-order-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddOrderFormComponent,
    OrderHistoryComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
