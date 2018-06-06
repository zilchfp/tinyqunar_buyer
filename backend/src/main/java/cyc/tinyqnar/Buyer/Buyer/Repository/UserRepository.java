package cyc.tinyqnar.Buyer.Buyer.Repository;

import cyc.tinyqnar.Buyer.Buyer.Domain.Order;
import cyc.tinyqnar.Buyer.Buyer.Domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface UserRepository extends JpaRepository<User, Long> {

    public User findByUsernameAndPassword(String username, String password);






}
