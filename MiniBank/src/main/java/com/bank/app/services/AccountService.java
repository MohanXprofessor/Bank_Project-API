package com.bank.app.services;

import java.util.List;

import com.bank.app.entity.Account;

//All method come under Service Layer

public interface AccountService {
	
	public Account createAccount(Account account);
	
	public Account getAccountDetailByAccountNumber(Long accountNo);
	
	public List <Account> getAllAccountDetails();
	
	public Account depositAmount(Long accountNo ,Double amount);
	
	public Account withdrawAmount(Long accountNo,Double amount);
	
	public void closeAccount(Long accountNo);
	

}
