# 전자정부프레임워크 MSA + React 프로젝트

[![Deploy to GitHub Pages](https://github.com/cel0843/antigravitySpringBootTest/actions/workflows/deploy.yml/badge.svg)](https://github.com/cel0843/antigravitySpringBootTest/actions/workflows/deploy.yml)

## 🌐 Live Demo

**프론트엔드**: https://cel0843.github.io/antigravitySpringBootTest/

## 프로젝트 개요

전자정부프레임워크 기반의 **마이크로서비스 아키텍처(MSA)** 백엔드와 **React SPA** 프론트엔드를 포함한 풀스택 프로젝트입니다.

### 아키텍처

```
React SPA (GitHub Pages)
    ↓
API Gateway (:8080)
    ↓
┌─────────────┬─────────────┬─────────────┐
│ User Service│Order Service│Product Svc  │
│   (:8081)   │   (:8082)   │   (:8083)   │
└─────────────┴─────────────┴─────────────┘
         ↓           ↓           ↓
    Eureka Discovery Server (:8761)
```

## 백엔드 (MSA)

### 구성 서비스

- **Discovery Service** (Eureka Server) - :8761
- **Config Service** - :8888
- **API Gateway** - :8080
- **User Service** - :8081
- **Order Service** - :8082
- **Product Service** - :8083

### 기술 스택

- Spring Boot 2.7.18
- Spring Cloud 2021.0.8
- Java 1.8 (JDK 17)
- Maven 3.9.11
- H2 Database

## 프론트엔드 (React SPA)

### 페이지

- 메인 페이지
- 공지사항 (목록 + 상세)
- 문의사항 (목록 + 작성)
- 자주묻는질문 (FAQ)

### 기술 스택

- React 18.2.0
- Vite 5.0.8
- React Router 6.20.0
- Axios 1.6.2

## 로컬 실행 방법

### 백엔드 실행

```bash
# 1. Discovery Service (필수 - 가장 먼저)
cd egov-discovery-service
mvn spring-boot:run

# 2. 비즈니스 서비스들 (각각 별도 터미널에서)
cd egov-user-service && mvn spring-boot:run
cd egov-order-service && mvn spring-boot:run
cd egov-product-service && mvn spring-boot:run

# 3. API Gateway (마지막)
cd egov-gateway-service
mvn spring-boot:run
```

### 프론트엔드 실행

```bash
cd egov-frontend
npm install
npm run dev
```

로컬 접속: http://localhost:3000

## GitHub Pages 배포

프론트엔드는 자동으로 GitHub Pages에 배포됩니다.

### 수동 배포

```bash
cd egov-frontend
npm run deploy
```

### 자동 배포

`main` 브랜치에 푸시하면 GitHub Actions가 자동으로 빌드 및 배포합니다.

## 접속 URL

### 프로덕션
- **프론트엔드**: https://cel0843.github.io/antigravitySpringBootTest/

### 로컬 개발
- **프론트엔드**: http://localhost:3000
- **Eureka Dashboard**: http://localhost:8761
- **API Gateway**: http://localhost:8080

## 프로젝트 구조

```
antigravitySpringBootTest/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 워크플로우
├── egov-discovery-service/     # Eureka Server
├── egov-config-service/         # Config Server
├── egov-gateway-service/        # API Gateway
├── egov-user-service/           # User Service
├── egov-order-service/          # Order Service
├── egov-product-service/        # Product Service
├── egov-frontend/               # React SPA
│   ├── src/
│   ├── package.json
│   └── vite.config.js
├── pom.xml                      # 부모 POM
└── README.md
```

## 주요 기능

### ✅ MSA 아키텍처
- 서비스 디스커버리 (Eureka)
- API Gateway를 통한 통합 접근
- 독립적인 서비스 배포 및 확장
- 각 서비스별 독립 데이터베이스

### ✅ React SPA
- 클라이언트 사이드 라우팅
- 반응형 디자인
- 모던 UI/UX
- GitHub Pages 호스팅

### ✅ CI/CD
- GitHub Actions 자동 배포
- 프로덕션 빌드 최적화

## 라이선스

전자정부 표준프레임워크 라이선스

## 개발자

cel0843

## 참고 자료

- [전자정부 표준프레임워크](https://www.egovframe.go.kr)
- [Spring Cloud](https://spring.io/projects/spring-cloud)
- [React](https://react.dev)
