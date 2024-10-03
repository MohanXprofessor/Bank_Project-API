import { Component } from '@angular/core';
import { Account } from '../../Models/account';
import { AccountService } from '../../Services/account.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-accoutupdate',
  templateUrl: './accoutupdate.component.html',
  styleUrl: './accoutupdate.component.css'
})
export class AccoutupdateComponent {

  
  accounts: Account[] = [];
  account: Account | null = null;  // To hold a specific account

  constructor(
    private accountService: AccountService, 
    private router: Router,
    private route: ActivatedRoute   // ActivatedRoute to capture route parameters
  ) {}

  ngOnInit(): void {
    // Fetch all accounts
    this.accountService.getAllAccounts().subscribe(data => {
      this.accounts = data;
    });

    // Get account ID from the URL and fetch the specific account
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));  // Capture the 'id' from the route
      if (id) {
        this.getAccountById(id);
      }
    });
  }

  // Method to fetch account by ID
  getAccountById(id: number): void {
    this.accountService.getAccountDetail(id).subscribe(data => {
      this.account = data;
    });
  }

  backrecord()
  {
    this.router.navigate(['/bankrecord'])
  }



  onUpdate(){
    
  }
}
