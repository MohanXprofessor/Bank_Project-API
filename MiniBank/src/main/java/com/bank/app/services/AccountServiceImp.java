package com.bank.app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bank.app.entity.Account;
import com.bank.app.repository.AccountRepo;

@Service
public class AccountServiceImp implements AccountService {
	
	@Autowired
	AccountRepo repo;

	@Override
	public Account createAccount(Account account) {
		
		return repo.save(account);
	}

	@Override
	public Account getAccountDetailByAccountNumber(Long accountNo) {
		
		Optional<Account> account=repo.findById(accountNo);
		if(account.isEmpty())
		{
			throw new RuntimeException("Account is NOT Present");
		}
		Account accountfound=account.get();
		return accountfound;
	}

	@Override
	public List<Account> getAllAccountDetails() {
		
		List<Account> listofaccount=repo.findAll();
		return listofaccount;
	}

	@Override
	public Account depositAmount(Long accountNo, Double amount) {
		
		Optional <Account> account= repo.findById(accountNo);
		if(account.isEmpty())
		{
			throw new RuntimeException("Account is NOT Present");
		}
		Account accountpresent=account.get();
		Double totalBalance=accountpresent.getAccountBalance()+amount;
		accountpresent.setAccountBalance(totalBalance);;
		repo.save(accountpresent);
		return accountpresent;
	}

	@Override
	public Account withdrawAmount(Long accountNo, Double amount) {
		Optional <Account> account= repo.findById(accountNo);
		if(account.isEmpty())
		{
			throw new RuntimeException("Account is NOT Present");
		}
		Account accountpresent=account.get();
		
		
		Double accountBalance=accountpresent.getAccountBalance()-amount;
		accountpresent.setAccountBalance(accountBalance);
		repo.save(accountpresent);
		return accountpresent;
		
		
		
	}

	@Override
	public void closeAccount(Long accountNo) {
		
		getAccountDetailByAccountNumber(accountNo);
		repo.deleteById(accountNo);
}
}
