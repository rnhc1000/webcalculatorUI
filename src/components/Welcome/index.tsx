import './styles.css';
import homeLogo from '../../assets/svg/undraw_calculator_re_alsc.svg'
import { Link } from 'react-router-dom';


export default function Welcome() {
    return (
        <section>

            <div className='welcome fadeIn fourth'>
                <h1>Do the maths...</h1>
                <img className="home-img" src={homeLogo} alt="Sign-in page" />
            </div>
            <div className='fadeIn fourth'>
                <Link to="/login">
                    <h2 className="underlineHover">&nbsp;Sign-in&nbsp;</h2>
                </Link>
            </div>
        </section>

    );
}