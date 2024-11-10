import './styles.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <Link to="https://www.ferreiras.dev.br" target="_blank">
                    <p>All rights reserved - &nbsp;Visit my portfolio &#128073;&#127998;&nbsp; https://www.ferreiras.dev.br&copy; </p>
                </Link>
      
            </div>
        </footer>
    );
}