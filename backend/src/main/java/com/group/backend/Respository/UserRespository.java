package com.group.backend.Respository;

import com.group.backend.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

<<<<<<< HEAD
@Repository
public interface UserRespository extends JpaRepository<User, Long> {
    User findByUsername(String username);
=======
import java.util.Optional;

@Repository
public interface UserRespository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
>>>>>>> 5abbf03 (response token)
}
