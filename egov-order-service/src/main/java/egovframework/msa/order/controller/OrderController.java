package egovframework.msa.order.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class OrderController {

    @GetMapping("/health")
    public Map<String, String> health() {
        Map<String, String> response = new HashMap<>();
        response.put("service", "Order Service");
        response.put("status", "UP");
        return response;
    }

    @GetMapping("/orders")
    public Map<String, String> getOrders() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Order Service - 주문 목록 조회");
        response.put("service", "egov-order-service");
        return response;
    }
}
