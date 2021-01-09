import './styles.css'
import {ReactComponent as Instagram} from './Instagram.svg'
import {ReactComponent as Linkdin} from './Linkedin.svg'
import {ReactComponent as Youtube} from './Youtube.svg'

const Footer = () => {
    return (
        <footer className='main-footer'>
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className='footer-icons'>
                <a href='https://www.youtube.com/devsuperior' target='_new'>
                    <Instagram />
                </a>
                <a href='https://www.instagram.com/devsuperior.ig/?hl=pt' target='_new'>
                    <Linkdin />
                </a>
                <a href='https://www.linkedin.com/school/devsuperior/' target='_new'>
                    <Youtube />
                </a>
            </div>
        </footer>
    );
}

export default Footer;