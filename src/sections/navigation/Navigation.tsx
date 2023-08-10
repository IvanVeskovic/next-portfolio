import { useContext, useState } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

const Navigation = () => {
    const [showFullScreenNavigation, setShowFullScreenNavigation] = useState(false);

    const { theme, updateTheme } = useContext(ThemeContext)

    return (
        <nav className={`nav ${showFullScreenNavigation ? 'nav__full-screen' : ''}`}>
            <div className="nav__container">
                <a href="#" className="nav__logo">
                    <img src="/images/logo.svg" alt="Logo" className='nav__logo' title='Ivan Veskovic' />
                </a>
                <div className='nav__theme' onClick={updateTheme}>
                    <div className="nav__theme-icon"></div>
                </div>
                <div className="nav__button" onClick={() => setShowFullScreenNavigation(!showFullScreenNavigation)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className="nav__list-wrapper">
                <ul className="nav__list">
                    <li className="nav__list__item">
                        <a href="#" className="nav__list__link">About</a>
                    </li>
                    <li className="nav__list__item">
                        <a href="#" className="nav__list__link">Recent work</a>
                    </li>
                    <li className="nav__list__item">
                        <a href="#" className="nav__list__link">Approach</a>
                    </li>
                    <li className="nav__list__item">
                        <a href="#" className="nav__list__link">Skills</a>
                    </li>
                    <li className="nav__list__item">
                        <a href="#" className="nav__list__link">Experience</a>
                    </li>
                    <li className="nav__list__item">
                        <a href="#" className="nav__list__link">Contact</a>
                    </li>
                </ul>
                <a href="#" download={'add cv link here'} className="nav__list__button">
                    Download cv
                </a>
            </div>
        </nav>
    );
};

export default Navigation;
