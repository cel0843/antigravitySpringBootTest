package egovframework.example.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;

@Configuration
@ImportResource({
        "classpath*:egovframework/spring/context-*.xml"
})
public class EgovConfig {
    // Spring Boot handles most configurations automatically.
    // Import legacy XML configurations if needed, or migrate them to Java Config.
    // For this sample, we keep it simple.
}
