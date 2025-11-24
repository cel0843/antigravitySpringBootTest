package egovframework.msa.user.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class UserController {

    @GetMapping("/health")
    public Map<String, String> health() {
        Map<String, String> response = new HashMap<>();
        response.put("service", "User Service");
        response.put("status", "UP");
        return response;
    }

    @GetMapping("/users")
    public Map<String, String> getUsers() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "User Service - 사용자 목록 조회");
        response.put("service", "egov-user-service");
        return response;
    }
}
