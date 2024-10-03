import { Component } from '@angular/core';
import { Account } from '../../Models/account';
import { AccountService } from '../../Services/account.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { delay } from 'rxjs';

@Component({
  selector: 'app-withdrawaccount',
  templateUrl: './withdrawaccount.component.html',
  styleUrls: ['./withdrawaccount.component.css'] // Fixed typo here
})
export class WithdrawaccountComponent {
  waccount: Account = new Account();
  withdrawAmount: number=0; // Add a field to hold the withdrawal amount

  constructor(private accountservice: AccountService, private router: Router) {}

  onsubmit() {
    this.withdrawAmountFromAccount();
  }

  withdrawAmountFromAccount() {
    // Ensure the withdrawal amount is provided
    this.accountservice.withdrawAmount(this.waccount.accountNo,this.withdrawAmount).subscribe(data=>{
      
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Withdraw Successfully...",
        showConfirmButton: false,
        timer: 2000
      });
      
      setTimeout(() => {
        this.goto();
      }, 2500);

      
    })
    
  }

  goto() {
    this.router.navigate(['/bankrecord']);
  }

      
}