import axios from 'axios'

const api = axios.create({
    baseURL: '/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})

// Request interceptor
api.interceptors.request.use(
    config => {
        // 토큰이 있으면 헤더에 추가
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// Response interceptor
api.interceptors.response.use(
    response => response.data,
    error => {
        if (error.response) {
            // 서버 응답 오류
            console.error('API Error:', error.response.data)
        } else if (error.request) {
            // 요청은 보냈지만 응답이 없음
            console.error('No response:', error.request)
        } else {
            // 요청 설정 중 오류
            console.error('Error:', error.message)
        }
        return Promise.reject(error)
    }
)

// API 함수들
export const noticeAPI = {
    getList: () => api.get('/notice/api/notices'),
    getDetail: (id) => api.get(`/notice/api/notices/${id}`),
}

export const inquiryAPI = {
    getList: () => api.get('/inquiry/api/inquiries'),
    create: (data) => api.post('/inquiry/api/inquiries', data),
}

export const faqAPI = {
    getList: () => api.get('/faq/api/faqs'),
}

export default api
