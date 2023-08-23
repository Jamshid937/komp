import React from 'react'
import './NavBar.css'
import { useTranslation } from 'react-i18next';
import logo from '../../Imgs/logo.svg'
import phone from '../../Imgs/Phone.png'
import whitePhone from '../../Imgs/whitePhone.png'
function NavBar() {
  const { t, i18n } = useTranslation();



  function TranslationFunc(e) {
    i18n.changeLanguage(e.target.value)
  }
  const [click, setClick] = React.useState(false);
  const [navBar] = React.useState(false)
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  return (
    <div className={navBar ? 'navbar active' : 'navbar'}  >
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <a exact href="#home" className="nav-logo" >
            <img src={logo} alt="" />
          </a>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                exact
                href="#header"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                {t('li8')}
              </a>
            </li>
            <li className="nav-item">
              <a
                exact
                href="#servic"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                {t('li9')}
              </a>
              <ul className='nav-item__dropdown'>
                <li><a href="#servic">Scaner</a> </li>
                <li><a href="#servic">Pereplyot</a> </li>
                <li><a href="#servic">Taklifnoma</a> </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                exact
                href="#tamirlash"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                {t('li10')}
              </a>
            </li>
            <li className="nav-item">
              <a
                exact
                href="#qoshimcha"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                {t('li11')}
              </a>
              <ul className='nav-item__dropdown'>
                <li> 
                  <a 
                  exact
                  activeClassName="active"
                  onClick={click ? handleClick : null}
                  href="#servic" >
                    {t('li16')}
                    </a>
                  </li>
                <li>                   
                 <a
                  exact
                  activeClassName="active"
                  onClick={click ? handleClick : null}
                  href="#servic" >
                    {t('li17')}
                    </a>
                    </li>
                <li>                   
                  <a 
                  exact
                  activeClassName="active"
                  onClick={click ? handleClick : null}
                  href="#servic" >
                    {t('li18')}
                    </a>
                  </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
              className="nav-links"
              href="#konselariya"
                
                exact
                activeClassName="active"
                onClick={click ? handleClick : null}
                
              >
                {t('li12')}
              </a>
            </li>
 
            <li className='nav-bar__last'>
              <ul>
                <li className='footer__link__list__item'>
                  <a
                    exact
                    href="#servic"
                    activeClassName="active"
                    onClick={click ? handleClick : null}
                  >
                    {t('li13')}
                  </a>
                </li>
                <li className='footer__link__list__item'>
                  <a
                    exact
                    href="#servic"
                    activeClassName="active"
                    onClick={click ? handleClick : null}
                  >
                    {t('li14')}
                  </a>
                </li>
                <li className='footer__link__list__item'>
                  <a
                    exact
                    href="#servic"
                    activeClassName="active"
                    onClick={click ? handleClick : null}
                  >
                    {t('li5')}
                  </a>
                </li>
              </ul>
            </li>
            <li className='nav-bar__last'>
              <ul className='footer__link__list'>
                <li className='footer__link__list__item'>
                  <a
                    exact
                    href="#servic"
                    activeClassName="active"
                    onClick={click ? handleClick : null}
                  >
                    {t('li16')}
                  </a>
                </li>
                <li className='footer__link__list__item'>
                  <a
                    exact
                    href="#konselariya"
                    activeClassName="active"
                    onClick={click ? handleClick : null}
                  >
                    {t('li17')}
                  </a>
                </li>
                <li className='footer__link__list__item'>
                  <a
                  href="#servic"
                  exact  
                  activeClassName="active"  
                  onClick={click ? handleClick : null}
                  >
                    {t('li18')}
                  </a>
                </li>
              </ul>
            </li>           
            <li>
              <select className='nav-item_select__bar' onChange={TranslationFunc}>
                <option value="uz" className='nav-item_select__option'>O`z</option>
                <option value="en" className='nav-item_select__option'>En</option>
                <option value="ru" className='nav-item_select__option'>RU</option>
              </select>
            </li>
          </ul>
          <div className='nav-item__phone'>
            <a href="tel:+998919110683">
              <img src={phone} alt="" />
              <img src={whitePhone} alt="" />
            </a>

            <select className='nav-item_select' onChange={TranslationFunc}>
              <option value="uz" className='nav-item_select__option' >O`z</option>
              <option value="en" className='nav-item_select__option'>En</option>
              <option value="ru" className='nav-item_select__option'>RU</option>
            </select>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>
  );
}

export default NavBar