import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BankrecordComponent } from './components/bankrecord/bankrecord.component';
import { CreateaccountComponent } from './components/createaccount/createaccount.component';
import { DepositaccountComponent } from './components/depositaccount/depositaccount.component';
import { WithdrawaccountComponent } from './components/withdrawaccount/withdrawaccount.component';
import { ViewuserComponent } from './components/viewuser/viewuser.component';
import { AccoutupdateComponent } from './components/accoutupdate/accoutupdate.component';


const routes: Routes = [

  {path:"navbar",component:NavbarComponent},
  {path:"bankrecord",component:BankrecordComponent},
  {path:"createaccount",component:CreateaccountComponent},
  {path:"depositaccount",component:DepositaccountComponent},
  {path:"withdrawaccount",component:WithdrawaccountComponent},
  {path:"viewuser/:id",component:ViewuserComponent},
  {path:"accountupdate/:id",component:AccoutupdateComponent},


 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
