package egovframework.msa.gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class EgovGatewayServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(EgovGatewayServiceApplication.class, args);
    }
}
