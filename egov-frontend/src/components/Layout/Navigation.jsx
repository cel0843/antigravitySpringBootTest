import { NavLink } from 'react-router-dom'

function Navigation() {
    return (
        <nav className="navigation">
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                홈
            </NavLink>
            <NavLink to="/notice" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                공지사항
            </NavLink>
            <NavLink to="/inquiry" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                문의사항
            </NavLink>
            <NavLink to="/faq" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                자주묻는질문
            </NavLink>
        </nav>
    )
}

export default Navigation
