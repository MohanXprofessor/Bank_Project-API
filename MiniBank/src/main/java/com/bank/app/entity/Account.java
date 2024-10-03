package com.bank.app.entity;

import java.util.Random;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "account")
public class Account {
    
    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long accountNo;

    @Column(name = "Account_Holder_Name")
    private String accountHolderName;

    @Column(name = "Amount")
    private double accountBalance;

    // Constructors
    public Account() {
    	this.accountNo = generateAccountNumber();
    }
    
    
    //We can add prefix number also
    private Long generateAccountNumber() {
        Random random = new Random();
        long accountNumber = 10000000000L + (long)(random.nextDouble() * 89999999999L);
        return accountNumber;
    }

	public Account(Long accountNo, String accountHolderName, double accountBalance) {
		super();
		this.accountNo = accountNo;
		this.accountHolderName = accountHolderName;
		this.accountBalance = accountBalance;
	}

	public Long getAccountNo() {
		return accountNo;
	}

	public void setAccountNo(Long accountNo) {
		this.accountNo = accountNo;
	}

	public String getAccountHolderName() {
		return accountHolderName;
	}

	public void setAccountHolderName(String accountHolderName) {
		this.accountHolderName = accountHolderName;
	}

	public double getAccountBalance() {
		return accountBalance;
	}

	public void setAccountBalance(double accountBalance) {
		this.accountBalance = accountBalance;
	}

	@Override
	public String toString() {
		return "Account [accountNo=" + accountNo + ", accountHolderName=" + accountHolderName + ", accountBalance="
				+ accountBalance + "]";
	}
    
    
    

}