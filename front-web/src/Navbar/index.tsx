import "./styles.css"
import {ReactComponent as Logo} from './Logo.svg'

const Navbar = () => {
    return (
        <nav className="main-navbar">
            <div>
                <Logo className='logo-img'/>
                <a href='home' className = 'logo-text'>DS Delicery</a>
            </div>
        </nav>
    );
}

export default Navbar;