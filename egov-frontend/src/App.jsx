import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import NoticeList from './pages/Notice/NoticeList'
import NoticeDetail from './pages/Notice/NoticeDetail'
import InquiryList from './pages/Inquiry/InquiryList'
import InquiryForm from './pages/Inquiry/InquiryForm'
import FAQList from './pages/FAQ/FAQList'
import './App.css'

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/notice" element={<NoticeList />} />
                    <Route path="/notice/:id" element={<NoticeDetail />} />
                    <Route path="/inquiry" element={<InquiryList />} />
                    <Route path="/inquiry/new" element={<InquiryForm />} />
                    <Route path="/faq" element={<FAQList />} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default App
