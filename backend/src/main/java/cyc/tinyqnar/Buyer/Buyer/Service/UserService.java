package cyc.tinyqnar.Buyer.Buyer.Service;

import cyc.tinyqnar.Buyer.Buyer.Domain.User;
import cyc.tinyqnar.Buyer.Buyer.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public boolean CheckExistByUsernameAndPassword(String username, String password) {
        User res = userRepository.findByUsernameAndPassword(username, password);
        return !(res == null);
    }

    public User AddUser(User user) {
        return userRepository.save(user);
    }
}
