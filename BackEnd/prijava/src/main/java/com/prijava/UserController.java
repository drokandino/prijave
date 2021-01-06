package com.prijava;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/registerUser")
    void register(@RequestBody User user){
        userRepository.save(user);
    }

    @PostMapping("/login")
    Map<String, String> login(@RequestBody User user){
        HashMap<String, String> object = new HashMap<>();

        System.out.println(user.toString());

        if(userRepository.existsByUsernameAndPassword(user.getUsername(), user.getPassword())){
            object.put("success", "true");
        }else {
            object.put("success", "false");
        }
        return object;
    }

}
