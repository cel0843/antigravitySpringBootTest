import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Inquiry.css'

function InquiryForm() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        email: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // API 호출 로직
        alert('문의가 등록되었습니다.')
        navigate('/inquiry')
    }

    return (
        <div className="inquiry-form-page">
            <h1 className="page-title">문의하기</h1>

            <form onSubmit={handleSubmit} className="inquiry-form card">
                <div className="form-group">
                    <label htmlFor="title">제목 *</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        placeholder="제목을 입력하세요"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">이메일 *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="답변 받을 이메일을 입력하세요"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="content">내용 *</label>
                    <textarea
                        id="content"
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        required
                        rows="10"
                        placeholder="문의 내용을 입력하세요"
                    />
                </div>

                <div className="form-actions">
                    <button type="button" onClick={() => navigate('/inquiry')} className="btn btn-secondary">
                        취소
                    </button>
                    <button type="submit" className="btn btn-primary">
                        등록
                    </button>
                </div>
            </form>
        </div>
    )
}

export default InquiryForm
