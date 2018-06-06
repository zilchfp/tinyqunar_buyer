package cyc.tinyqnar.Buyer.Buyer.Controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import cyc.tinyqnar.Buyer.Buyer.Domain.Ticket;
import cyc.tinyqnar.Buyer.Buyer.Domain.User;
import cyc.tinyqnar.Buyer.Buyer.Service.TicketService;
import cyc.tinyqnar.Buyer.Buyer.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;


@RestController
public class UserController {

    @Autowired
    private UserService userService;


    @RequestMapping(value = "/Login", method = RequestMethod.POST)
    public boolean LoginCheck(@RequestParam(value = "username")String username,
                              @RequestParam(value = "password")String password ) {
        System.out.println(username);
        System.out.println(password);
        return userService.CheckExistByUsernameAndPassword(username, password);
    }

    @RequestMapping(value = "/Register", method = {RequestMethod.POST, RequestMethod.GET})
    public User Register(@RequestBody String newUser) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        User u = mapper.readValue(newUser, User.class);
        return userService.AddUser(u);
    }

}