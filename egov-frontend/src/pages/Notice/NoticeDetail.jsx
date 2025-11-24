import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './Notice.css'

function NoticeDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [notice, setNotice] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // API 호출 대신 임시 데이터 사용
        setTimeout(() => {
            setNotice({
                id: parseInt(id),
                title: '전자정부프레임워크 MSA 버전 출시',
                date: '2025-11-24',
                views: 150,
                content: `
          <h2>전자정부프레임워크 MSA 버전이 출시되었습니다.</h2>
          
          <p>안녕하세요. 전자정부 표준프레임워크 개발팀입니다.</p>
          
          <p>이번에 마이크로서비스 아키텍처(MSA) 기반의 새로운 버전을 출시하게 되었습니다.</p>
          
          <h3>주요 기능</h3>
          <ul>
            <li>Spring Cloud 기반 마이크로서비스 아키텍처</li>
            <li>Eureka 서비스 디스커버리</li>
            <li>API Gateway를 통한 통합 접근</li>
            <li>독립적인 서비스 배포 및 확장</li>
            <li>React 기반 SPA 프론트엔드</li>
          </ul>
          
          <h3>시스템 요구사항</h3>
          <ul>
            <li>JDK 17 이상</li>
            <li>Maven 3.9 이상</li>
            <li>Node.js 18 이상</li>
          </ul>
          
          <p>자세한 내용은 공식 문서를 참고해주시기 바랍니다.</p>
          
          <p>감사합니다.</p>
        `
            })
            setLoading(false)
        }, 500)
    }, [id])

    if (loading) {
        return <div className="loading">로딩 중...</div>
    }

    if (!notice) {
        return <div className="error">공지사항을 찾을 수 없습니다.</div>
    }

    return (
        <div className="notice-detail">
            <h1 className="page-title">{notice.title}</h1>

            <div className="notice-meta">
                <span>작성일: {notice.date}</span>
                <span>조회수: {notice.views}</span>
            </div>

            <div className="notice-content card" dangerouslySetInnerHTML={{ __html: notice.content }} />

            <div className="notice-actions">
                <button onClick={() => navigate('/notice')} className="btn btn-secondary">
                    목록으로
                </button>
            </div>
        </div>
    )
}

export default NoticeDetail
