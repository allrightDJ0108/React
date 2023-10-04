package gcu.backend.axiosex;

import java.util.Date;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/")
public class UserRest {
    
    @GetMapping(value = "/")
    public String home(){
        return "GCU OK";
    }

    @PostMapping(value = "/api/users")
    public User user(){
        System.out.println("UserApicontroller start");
        User user = new User(1, "Gachon", new Date());

        return user;
    }
    
}
