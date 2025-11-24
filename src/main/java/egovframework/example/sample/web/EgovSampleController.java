package egovframework.example.sample.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EgovSampleController {

    @GetMapping("/")
    public String home() {
        return "Hello, eGovFramework 4.x (Spring Boot)!";
    }
}
