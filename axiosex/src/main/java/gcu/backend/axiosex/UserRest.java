package gcu.backend.axiosex;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/")
public class UserRest {

    @Autowired
    private final UserRepository userRepository;
    
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

    @PostMapping(value = "/users")
    public String createUser (@RequestBody User user){
        userRepository.save(user);

        return "Create User OK";
    }

    
}
