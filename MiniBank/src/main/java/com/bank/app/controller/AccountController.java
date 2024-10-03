package com.bank.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bank.app.entity.Account;
import com.bank.app.services.AccountService;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/account")
public class AccountController {
	
	@Autowired
	AccountService service;
	
	//Create the Account
	@PostMapping("/create")
	public ResponseEntity<Account> createAccount(@RequestBody Account account)
	{
		
		Account createAccount= service.createAccount(account);
		return ResponseEntity.status(HttpStatus.CREATED).body(createAccount);
	}
	
	
	@GetMapping("/{accountNo}")
	public Account getAccountDetailByAccountNumber(@PathVariable Long accountNo)
	{
		Account accountfind=service.getAccountDetailByAccountNumber(accountNo);
		return accountfind;
	}
	
	
	@GetMapping("/getallaccount")
	public List <Account> getAllAccountDetails()
	{
		List<Account> allAccountDetails=service.getAllAccountDetails();
		return allAccountDetails;
	}
	
	@PutMapping("/deposit/{accountNo}/{amount}")
	public Account depositAmount(@PathVariable Long accountNo ,@PathVariable Double amount)
	{
		
		Account account=service.depositAmount(accountNo, amount);
		return account;
	}

		@PutMapping("/withdraw/{accountNo}/{amount}")
		public Account withdrawAmount(@PathVariable Long accountNo, @PathVariable Double amount)
		{
			Account account=service.withdrawAmount(accountNo, amount);
			return account;
		}
	
		@DeleteMapping("/delete/{accountNo}")
		public ResponseEntity<String> deleteAccount(@PathVariable Long accountNo)
		{
			service.closeAccount(accountNo);
			
			return ResponseEntity.status(HttpStatus.ACCEPTED).body("Account Closed Successfully...!");
		}
		
//	public void closeAccount(Long accountNo);
}
