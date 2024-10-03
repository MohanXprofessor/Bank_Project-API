import { Component } from '@angular/core';
import { Account } from '../../Models/account';
import { AccountService } from '../../Services/account.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrl: './createaccount.component.css'
})
export class CreateaccountComponent {

  account: Account = new Account();

  constructor(private accountService: AccountService,private router:Router) {}


  onSubmit()
  {
    this.createAccount();
  }
  createAccount() {
    this.accountService.createAccount(this.account).subscribe(data=>{
      
// sweet alert 
Swal.fire({
  position: "center",
  icon: "success",
  title: "Account Created Successfully..!",
  showConfirmButton: false,
  timer: 1500
});

      this.Gotorecord();

    })
   
  }

  Gotorecord()
  {
    this.router.navigate(['/']);
  }

  
}
