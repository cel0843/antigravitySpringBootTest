import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Home.css'

function Home() {
    const [recentNotices, setRecentNotices] = useState([])

    useEffect(() => {
        // 최신 공지사항 3개 가져오기 (임시 데이터)
        setRecentNotices([
            { id: 1, title: '전자정부프레임워크 MSA 버전 출시', date: '2025-11-24' },
            { id: 2, title: 'React 프론트엔드 개발 가이드', date: '2025-11-23' },
            { id: 3, title: 'Spring Cloud 마이크로서비스 아키텍처 소개', date: '2025-11-22' }
        ])
    }, [])

    return (
        <div className="home">
            <section className="hero">
                <h1 className="hero-title">전자정부 표준프레임워크</h1>
                <p className="hero-subtitle">마이크로서비스 아키텍처 기반 차세대 플랫폼</p>
                <div className="hero-buttons">
                    <Link to="/notice" className="btn btn-primary">공지사항 보기</Link>
                    <Link to="/faq" className="btn btn-secondary">FAQ 보기</Link>
                </div>
            </section>

            <section className="features">
                <h2 className="section-title">주요 기능</h2>
                <div className="feature-grid">
                    <div className="feature-card">
                        <div className="feature-icon">🚀</div>
                        <h3>MSA 아키텍처</h3>
                        <p>Spring Cloud 기반의 확장 가능한 마이크로서비스 구조</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">⚡</div>
                        <h3>고성능</h3>
                        <p>최적화된 성능과 빠른 응답 속도</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🔒</div>
                        <h3>보안</h3>
                        <p>전자정부 표준 보안 가이드 준수</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">📱</div>
                        <h3>반응형</h3>
                        <p>모든 디바이스에서 최적화된 사용자 경험</p>
                    </div>
                </div>
            </section>

            <section className="recent-notices">
                <div className="section-header">
                    <h2 className="section-title">최신 공지사항</h2>
                    <Link to="/notice" className="view-all">전체보기 →</Link>
                </div>
                <div className="notice-list">
                    {recentNotices.map(notice => (
                        <Link to={`/notice/${notice.id}`} key={notice.id} className="notice-item card">
                            <h3>{notice.title}</h3>
                            <span className="notice-date">{notice.date}</span>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="quick-links">
                <h2 className="section-title">바로가기</h2>
                <div className="quick-link-grid">
                    <Link to="/notice" className="quick-link-card">
                        <div className="quick-link-icon">📢</div>
                        <h3>공지사항</h3>
                        <p>최신 소식과 업데이트</p>
                    </Link>
                    <Link to="/inquiry" className="quick-link-card">
                        <div className="quick-link-icon">💬</div>
                        <h3>문의사항</h3>
                        <p>궁금한 점을 문의하세요</p>
                    </Link>
                    <Link to="/faq" className="quick-link-card">
                        <div className="quick-link-icon">❓</div>
                        <h3>자주묻는질문</h3>
                        <p>자주 묻는 질문과 답변</p>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Home
