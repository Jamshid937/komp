import React from 'react'
import { useTranslation } from 'react-i18next';
import Container from '../../layout/Container'
import footer from '../../Imgs/footer.png'
import './footer.css'
import location from '../../Imgs/location.svg'
import email from '../../Imgs/email.svg'
import call from '../../Imgs/call.svg'
import teleg from '../../Imgs/teleg.png'
import insta from '../../Imgs/insta.png'
import primeTech from '../../Imgs/primeTech.png'
const Footer = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className='footer'>
            <Container>
                <div className='footer__box'>
                    <div><img src={footer} alt="" /></div>
                    <div className='footer__location'>
                        <h4>{t('h8')}</h4>
                        <div className='footer__contact__card'>
                            <div className='footer__contact__card__img'>
                                <img src={location} alt="" />
                            </div>
                            <div className='footer__contact__card__about'>
                                <p>PRINT PRO kompyuter xizmatlari markazi</p>
                            </div>
                        </div>
                        <div className='footer__contact__card'>
                            <div className='footer__contact__card__img'>
                                <a href="mailto:farruxnorov74@gmail.com"><img src={email} alt="" /></a>
                            </div>
                            <div className='footer__contact__card__about'>
                                <p>farruxnorov74@gmail.com</p>
                            </div>
                        </div>
                        <div className='footer__contact__card'>
                            <div className='footer__contact__card__img'>
                               <a href="tel:+998919110683"><img src={call} alt="" /></a> 
                            </div>
                            <div className='footer__contact__card__about'>
                                <p>+998919110683</p>
                            </div>
                        </div>
                    </div>
                    <div className='footer__link'>
                        <h4>{t('h3')}</h4>
                        <ul className='footer__link__list'>
                            <li className='footer__link__list__item'>
                                <a
                                    exact
                                    href="#header"
                                    activeClassName="active"
                                >
                                    {t('li8')}
                                </a>
                            </li>
                            <li className='footer__link__list__item'>
                                <a
                                    exact
                                    href="#servic"
                                    activeClassName="active"
                                >
                                   {t('li9')}
                                </a>
                            </li>
                            <li className='footer__link__list__item'>
                                <a
                                    exact
                                    href="#servic"
                                    activeClassName="active"
                                >
                                    Kserokopiya
                                </a>
                            </li>
                            <li className='footer__link__list__item'>
                                <a
                                    exact
                                    href="#servic"
                                    activeClassName="active"
                                >
                                    {t('li13')}
                                </a>
                            </li>
                            <li className='footer__link__list__item'>
                                <a
                                    exact
                                    href="#servic"
                                    activeClassName="active"
                                >
                                     {t('li14')}
                                </a>
                            </li>
                            <li className='footer__link__list__item'>
                                <a
                                    exact
                                    href="#servic"
                                    activeClassName="active"
                                >
                                     {t('li5')}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer__link'>
                        <h4>{t('h10')}</h4>
                        <ul className='footer__link__list'>
                            <li className='footer__link__list__item'>
                                <a
                                    exact
                                    href="#servic"
                                    activeClassName="active"
                                >
                                    {t('li16')}
                                </a>
                            </li>
                            <li className='footer__link__list__item'>
                                <a
                                    exact
                                    href="#konselariya"
                                    activeClassName="active"
                                >
                                    {t('li17')}
                                </a>
                            </li>
                            <li className='footer__link__list__item'>
                                <a
                                    exact
                                    href="#servic"
                                    activeClassName="active"
                                >
                                    {t('li18')}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='footer__box__two'>
                  <div className='footer__box__two__icons'>
                    <a href="https://t.me/New_TASKENT"><img src={teleg} alt="" /></a>
                    <a href="https://www.instagram.com/"><img src={insta} alt="" /></a>
                  </div>
                  <div className='primeTech'>
                     <p>{t('creator')}</p>
                      <a href="https://primetechgroup.uz/"><img src={primeTech} alt="" /></a>
                  </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer