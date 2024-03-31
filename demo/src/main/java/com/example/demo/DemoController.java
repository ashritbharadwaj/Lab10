package com.example.demo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
// import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class DemoController {
    
    @RequestMapping("/hello")
    public String requestMethodName() {
        return "HelloWorld";
    }
    
}
