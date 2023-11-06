import { Link } from 'react-router-dom';
import './Navbar.css'

const NavbarAdmin = () => {
    return (
        <div className="navbar_admin">
            <div className='navbar__left'>
                Социальный<br/>навигатор
                <div className="img_logo"/>
            </div>
            
            <div className="links_admin">
                <Link className='links' to="/map">Карта</Link>
                <Link className='links' to="/notice">Уведомления</Link>
                <Link className='links' to="/organization">Организации</Link>
                <Link className='links' to="/user">Пользователи</Link>
            </div>

        </div>
    )
}

export default NavbarAdmin;