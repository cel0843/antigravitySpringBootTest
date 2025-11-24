import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Notice.css'

function NoticeList() {
    const [notices, setNotices] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // API 호출 대신 임시 데이터 사용
        setTimeout(() => {
            setNotices([
                { id: 1, title: '전자정부프레임워크 MSA 버전 출시', date: '2025-11-24', views: 150 },
                { id: 2, title: 'React 프론트엔드 개발 가이드', date: '2025-11-23', views: 98 },
                { id: 3, title: 'Spring Cloud 마이크로서비스 아키텍처 소개', date: '2025-11-22', views: 203 },
                { id: 4, title: 'API Gateway 설정 가이드', date: '2025-11-21', views: 145 },
                { id: 5, title: 'Eureka 서비스 디스커버리 활용법', date: '2025-11-20', views: 176 },
                { id: 6, title: 'Docker 컨테이너화 가이드', date: '2025-11-19', views: 132 },
                { id: 7, title: 'Kubernetes 배포 전략', date: '2025-11-18', views: 189 },
                { id: 8, title: '보안 강화 업데이트', date: '2025-11-17', views: 256 }
            ])
            setLoading(false)
        }, 500)
    }, [])

    if (loading) {
        return <div className="loading">로딩 중...</div>
    }

    return (
        <div className="notice-page">
            <h1 className="page-title">공지사항</h1>

            <div className="notice-table">
                <div className="table-header">
                    <div className="col-num">번호</div>
                    <div className="col-title">제목</div>
                    <div className="col-date">작성일</div>
                    <div className="col-views">조회수</div>
                </div>

                {notices.map((notice, index) => (
                    <Link to={`/notice/${notice.id}`} key={notice.id} className="table-row">
                        <div className="col-num">{notices.length - index}</div>
                        <div className="col-title">{notice.title}</div>
                        <div className="col-date">{notice.date}</div>
                        <div className="col-views">{notice.views}</div>
                    </Link>
                ))}
            </div>

            <div className="pagination">
                <button className="btn btn-secondary">이전</button>
                <span className="page-numbers">
                    <button className="page-num active">1</button>
                    <button className="page-num">2</button>
                    <button className="page-num">3</button>
                </span>
                <button className="btn btn-secondary">다음</button>
            </div>
        </div>
    )
}

export default NoticeList
