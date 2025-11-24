package egovframework.msa.product;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class EgovProductServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(EgovProductServiceApplication.class, args);
    }
}
