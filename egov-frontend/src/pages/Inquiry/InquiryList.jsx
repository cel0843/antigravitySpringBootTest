import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Inquiry.css'

function InquiryList() {
    const [inquiries, setInquiries] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setInquiries([
                { id: 1, title: 'MSA 구조 문의', status: '답변완료', date: '2025-11-24' },
                { id: 2, title: 'React 연동 방법', status: '답변대기', date: '2025-11-23' },
                { id: 3, title: 'API Gateway 설정 질문', status: '답변완료', date: '2025-11-22' },
                { id: 4, title: 'Eureka 서버 오류', status: '답변완료', date: '2025-11-21' },
                { id: 5, title: '배포 관련 문의', status: '답변대기', date: '2025-11-20' }
            ])
            setLoading(false)
        }, 500)
    }, [])

    if (loading) {
        return <div className="loading">로딩 중...</div>
    }

    return (
        <div className="inquiry-page">
            <div className="page-header">
                <h1 className="page-title">문의사항</h1>
                <Link to="/inquiry/new" className="btn btn-primary">문의하기</Link>
            </div>

            <div className="inquiry-table">
                <div className="table-header">
                    <div className="col-num">번호</div>
                    <div className="col-title">제목</div>
                    <div className="col-status">상태</div>
                    <div className="col-date">작성일</div>
                </div>

                {inquiries.map((inquiry, index) => (
                    <div key={inquiry.id} className="table-row">
                        <div className="col-num">{inquiries.length - index}</div>
                        <div className="col-title">{inquiry.title}</div>
                        <div className="col-status">
                            <span className={`status-badge ${inquiry.status === '답변완료' ? 'completed' : 'pending'}`}>
                                {inquiry.status}
                            </span>
                        </div>
                        <div className="col-date">{inquiry.date}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default InquiryList
