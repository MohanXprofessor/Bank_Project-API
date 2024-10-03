import { Component } from '@angular/core';
import { Account } from '../../Models/account';
import { AccountService } from '../../Services/account.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-depositaccount',
  templateUrl: './depositaccount.component.html',
  styleUrl: './depositaccount.component.css'
})
export class DepositaccountComponent {

  daccount:Account=new Account();
 

  constructor(private accountservice:AccountService,private router:Router){}

  onsubmit(){
    this.depositeAmount();
  }

  depositeAmount()
  {
    this.accountservice.depositAmount(this.daccount.accountNo,this.daccount.accountBalance).subscribe(data=>{
      // alert("Amount Deposited Successfully..");
      Swal.fire({
        position: "center",
        icon: "success",
        title: 'Deposit Successfully...',
        showConfirmButton: false,
        timer: 2000
      });
      
      setTimeout(() => {
        this.Goto();
      }, 2500);

      
    });
  
    }

    Goto(){
      this.router.navigate(['/bankrecord']);
    }



  }

 



