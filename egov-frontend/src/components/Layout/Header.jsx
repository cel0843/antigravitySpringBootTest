import { Link } from 'react-router-dom'
import Navigation from './Navigation'

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <Link to="/" className="logo">
                        <h1>전자정부프레임워크</h1>
                    </Link>
                    <Navigation />
                </div>
            </div>
        </header>
    )
}

export default Header
