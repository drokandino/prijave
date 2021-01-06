package com.prijava;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

    boolean existsByUsernameAndPassword(String username, String password);

}
