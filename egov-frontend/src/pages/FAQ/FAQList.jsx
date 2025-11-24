import { useState } from 'react'
import './FAQ.css'

function FAQList() {
    const [activeId, setActiveId] = useState(null)

    const faqs = [
        {
            id: 1,
            question: 'MSA 아키텍처란 무엇인가요?',
            answer: '마이크로서비스 아키텍처(MSA)는 애플리케이션을 작은 독립적인 서비스들로 나누어 개발하는 방식입니다. 각 서비스는 독립적으로 배포되고 확장될 수 있습니다.'
        },
        {
            id: 2,
            question: 'Eureka는 무엇인가요?',
            answer: 'Eureka는 Netflix에서 개발한 서비스 디스커버리 서버입니다. 마이크로서비스들이 자동으로 등록되고 서로를 찾을 수 있게 해줍니다.'
        },
        {
            id: 3,
            question: 'API Gateway의 역할은 무엇인가요?',
            answer: 'API Gateway는 모든 클라이언트 요청의 단일 진입점 역할을 합니다. 라우팅, 로드 밸런싱, 인증/인가 등의 기능을 제공합니다.'
        },
        {
            id: 4,
            question: 'React와 백엔드는 어떻게 연동하나요?',
            answer: 'React는 Axios 또는 Fetch API를 사용하여 백엔드 REST API와 통신합니다. Vite의 프록시 설정을 통해 개발 환경에서 CORS 문제를 해결할 수 있습니다.'
        },
        {
            id: 5,
            question: '각 마이크로서비스는 독립적인 데이터베이스를 가지나요?',
            answer: '네, MSA의 핵심 원칙 중 하나는 각 서비스가 자체 데이터베이스를 가지는 것입니다. 이를 통해 서비스 간 느슨한 결합을 유지할 수 있습니다.'
        },
        {
            id: 6,
            question: '서비스 간 통신은 어떻게 이루어지나요?',
            answer: '서비스 간 통신은 주로 REST API를 통해 이루어집니다. 비동기 통신이 필요한 경우 RabbitMQ나 Kafka 같은 메시지 큐를 사용할 수 있습니다.'
        },
        {
            id: 7,
            question: '프로젝트를 어떻게 실행하나요?',
            answer: '먼저 Discovery Service를 실행하고, 그 다음 각 마이크로서비스들을 실행합니다. 마지막으로 API Gateway를 실행하면 됩니다. 프론트엔드는 npm run dev로 실행합니다.'
        },
        {
            id: 8,
            question: '배포는 어떻게 하나요?',
            answer: 'Docker를 사용하여 각 서비스를 컨테이너화하고, Kubernetes를 통해 오케스트레이션할 수 있습니다. CI/CD 파이프라인을 구축하여 자동화된 배포도 가능합니다.'
        }
    ]

    const toggleFAQ = (id) => {
        setActiveId(activeId === id ? null : id)
    }

    return (
        <div className="faq-page">
            <h1 className="page-title">자주묻는질문 (FAQ)</h1>

            <div className="faq-list">
                {faqs.map(faq => (
                    <div key={faq.id} className={`faq-item card ${activeId === faq.id ? 'active' : ''}`}>
                        <div className="faq-question" onClick={() => toggleFAQ(faq.id)}>
                            <h3>Q. {faq.question}</h3>
                            <span className="faq-icon">{activeId === faq.id ? '−' : '+'}</span>
                        </div>
                        {activeId === faq.id && (
                            <div className="faq-answer">
                                <p>A. {faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FAQList
