package com.bank.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bank.app.entity.Account;

public interface AccountRepo extends JpaRepository<Account, Long> {

}
