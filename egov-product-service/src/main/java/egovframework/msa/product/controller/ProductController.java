package egovframework.msa.product.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class ProductController {

    @GetMapping("/health")
    public Map<String, String> health() {
        Map<String, String> response = new HashMap<>();
        response.put("service", "Product Service");
        response.put("status", "UP");
        return response;
    }

    @GetMapping("/products")
    public Map<String, String> getProducts() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Product Service - 상품 목록 조회");
        response.put("service", "egov-product-service");
        return response;
    }
}
