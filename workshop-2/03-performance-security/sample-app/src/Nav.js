import { Link } from 'react-router-dom'
import i18n from './locales/index.js'

const Nav = () => 
    <nav>
        <ul>
            <li><Link to="/">{i18n.t('Home')}</Link></li>
            <li><Link to="/visualize">{i18n.t('Visualize')}</Link></li>
            <li><Link to="/configure">{i18n.t('Configure')}</Link></li>
        </ul>
    </nav>

export default Nav