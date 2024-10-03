import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../Services/account.service';  // Adjust path if necessary
import { Account } from '../../Models/account';  // Adjust path if necessary
import { Router } from '@angular/router';

@Component({
  selector: 'app-bankrecord',
  templateUrl: './bankrecord.component.html',
  styleUrls: ['./bankrecord.component.css']  // Fixed 'styleUrls'
})
export class BankrecordComponent implements OnInit {
  
  
    accounts: Account[] = [];
  
    constructor(private accountService: AccountService,private router:Router) {}
  
    ngOnInit(): void {
      this.accountService.getAllAccounts().subscribe(data=>{
        this.accounts=data;
      })
    }

 // Method to load all accounts
 loadAccounts(): void {
  this.accountService.getAllAccounts().subscribe(data => {
    this.accounts = data;
  });
}

 // View allAccount Details...
 viewAccounts(accountNo: number):void{

           this.loadview(accountNo);
}

  
loadview(accountNo: number):void
{
  this.router.navigate([`/viewuser`,accountNo])
}

accountUpdate(accountNo: number):void
{
  this.router.navigate([`/accountupdate`,accountNo])
}

// Method to delete an account
deleteaccount(id: number): void {
  if (confirm("Are You Sure You Want to Delete this record?")) {
    this.accountService.deleteAccount(id).subscribe(() => {
      console.log("Account deleted successfully");
      this.loadAccounts();  // Reload the accounts after deletion
    }, error => {
      console.error("Error deleting account:", error);
    });
  }  
  this.gotorecord();
  }


  gotorecord()
  {
    return this.router.navigate(['/bankrecord'])
  }
}

