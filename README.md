# eGovFramework MSA 프로젝트

전자정부프레임워크 기반 마이크로서비스 아키텍처(MSA) 프로젝트입니다.

## 📋 프로젝트 구조

```
egov-msa-parent/
├── egov-discovery-service   # Eureka Server (서비스 디스커버리)
├── egov-config-service       # Config Server (중앙 설정 관리)
├── egov-gateway-service      # API Gateway (라우팅, 로드밸런싱)
├── egov-user-service         # 사용자 관리 서비스
├── egov-order-service        # 주문 관리 서비스
└── egov-product-service      # 상품 관리 서비스
```

## 🏗️ 아키텍처

```
클라이언트
    ↓
API Gateway (8080)
    ↓
┌─────────────┬─────────────┬─────────────┐
│ User Service│Order Service│Product Svc  │
│   (8081)    │   (8082)    │   (8083)    │
└─────────────┴─────────────┴─────────────┘
         ↓           ↓           ↓
    Eureka Discovery Server (8761)
```

## 🚀 실행 방법

### 1. 전체 빌드
```bash
mvn clean install
```

### 2. 서비스 실행 순서

**중요**: 반드시 아래 순서대로 실행해야 합니다!

#### ① Discovery Service 실행 (필수 - 가장 먼저)
```bash
cd egov-discovery-service
mvn spring-boot:run
```
- 포트: 8761
- URL: http://localhost:8761
- Eureka Dashboard에서 등록된 서비스 확인 가능

#### ② Config Service 실행 (선택)
```bash
cd egov-config-service
mvn spring-boot:run
```
- 포트: 8888

#### ③ 비즈니스 서비스 실행
각 서비스를 별도 터미널에서 실행:

**User Service**
```bash
cd egov-user-service
mvn spring-boot:run
```
- 포트: 8081
- Health Check: http://localhost:8081/api/health
- API: http://localhost:8081/api/users

**Order Service**
```bash
cd egov-order-service
mvn spring-boot:run
```
- 포트: 8082
- Health Check: http://localhost:8082/api/health
- API: http://localhost:8082/api/orders

**Product Service**
```bash
cd egov-product-service
mvn spring-boot:run
```
- 포트: 8083
- Health Check: http://localhost:8083/api/health
- API: http://localhost:8083/api/products

#### ④ Gateway Service 실행 (마지막)
```bash
cd egov-gateway-service
mvn spring-boot:run
```
- 포트: 8080

## 🌐 API 엔드포인트

### Gateway를 통한 접근 (권장)
```bash
# User Service
http://localhost:8080/user/api/health
http://localhost:8080/user/api/users

# Order Service
http://localhost:8080/order/api/health
http://localhost:8080/order/api/orders

# Product Service
http://localhost:8080/product/api/health
http://localhost:8080/product/api/products
```

### 직접 접근
각 서비스에 직접 접근도 가능합니다:
- User: http://localhost:8081/api/users
- Order: http://localhost:8082/api/orders
- Product: http://localhost:8083/api/products

## 📊 모니터링

### Eureka Dashboard
http://localhost:8761

모든 마이크로서비스의 등록 상태와 헬스 체크를 확인할 수 있습니다.

## 🛠️ 기술 스택

- **Spring Boot**: 2.7.18
- **Spring Cloud**: 2021.0.8
- **Java**: 1.8
- **Database**: H2 (각 서비스별 독립 DB)
- **Service Discovery**: Netflix Eureka
- **API Gateway**: Spring Cloud Gateway
- **Config Management**: Spring Cloud Config

## 📝 주요 특징

1. **서비스 디스커버리**: Eureka를 통한 자동 서비스 등록 및 발견
2. **API Gateway**: 단일 진입점을 통한 라우팅 및 로드 밸런싱
3. **독립 배포**: 각 마이크로서비스 독립적으로 배포 가능
4. **독립 데이터베이스**: 각 서비스가 자체 H2 DB 사용
5. **중앙 설정 관리**: Config Server를 통한 설정 관리

## 🔧 개발 환경

- Maven 3.9.11
- JDK 17 (또는 JDK 8 이상)
- Windows 10

## 📚 참고 자료

- [전자정부 표준프레임워크 포털](https://www.egovframe.go.kr)
- [Spring Cloud 공식 문서](https://spring.io/projects/spring-cloud)
