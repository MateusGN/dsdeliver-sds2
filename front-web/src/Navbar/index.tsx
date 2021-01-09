import "./styles.css"
import {ReactComponent as Logo} from './Logo.svg'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="main-navbar">
            <div>
                <Logo className='logo-img'/>
                <Link to='/' className = 'logo-text'>DS Delicery</Link>
            </div>
        </nav>
    );
}

export default Navbar;