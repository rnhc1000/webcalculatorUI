import './styles.css';
import { Link } from "react-router-dom";
import logo from '../../assets/svg/undraw_calculator_re_alsc.svg';

export default function Header() {

return (
    <header>
        <nav id="navbar" className="nav-main">
            <div className="nav-brand">
                <img title="Home" src={logo} alt="calculator logo;" />  
            </div>

            <ul className="nav-list">
                
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                
            </ul>
        </nav>
    </header>
);

}