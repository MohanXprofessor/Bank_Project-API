import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../Models/account';


@Injectable({
  providedIn: 'root',
})

export class AccountService {
  
  private baseUrl = 'http://localhost:8080/account'; // Spring Boot URL

  constructor(private http: HttpClient) {}

  createAccount(account: Account): Observable<Account> {
    return this.http.post<Account>(`${this.baseUrl}/create`, account);
  }

  getAccountDetail(accountNo: number): Observable<Account> {
    return this.http.get<Account>(`${this.baseUrl}/${accountNo}`);
  }

  getAllAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(`${this.baseUrl}/getallaccount`);
  }

  depositAmount(accountNo: number, amount: number): Observable<Account> {
    return this.http.put<Account>(`${this.baseUrl}/deposit/${accountNo}/${amount}`, {});
  }

  withdrawAmount(accountNo: number, amount: number): Observable<Account> {
    return this.http.put<Account>(`${this.baseUrl}/withdraw/${accountNo}/${amount}`, {});
  }

   // Method to delete an account by account number
   deleteAccount(accountNo: number): Observable<string> {
    return this.http.delete(`${this.baseUrl}/delete/${accountNo}`, { responseType: 'text' });
  }
}
