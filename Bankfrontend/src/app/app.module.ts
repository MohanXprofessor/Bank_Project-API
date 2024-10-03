import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BankrecordComponent } from './components/bankrecord/bankrecord.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateaccountComponent } from './components/createaccount/createaccount.component';
import { DepositaccountComponent } from './components/depositaccount/depositaccount.component';
import { WithdrawaccountComponent } from './components/withdrawaccount/withdrawaccount.component';
import { FormsModule } from '@angular/forms';
import { ViewuserComponent } from './components/viewuser/viewuser.component';
import { AccoutupdateComponent } from './components/accoutupdate/accoutupdate.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BankrecordComponent,
    CreateaccountComponent,
    DepositaccountComponent,
    WithdrawaccountComponent,
    ViewuserComponent,
    AccoutupdateComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
