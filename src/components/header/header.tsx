import './header.scss';
import logo from '../../assets/logo.png'

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className='link'>
                <p>Links</p>
                <p>Links</p>
            </div>
        </div>
    );
}

export default Header;
