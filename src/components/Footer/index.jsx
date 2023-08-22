import React from 'react'
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
    return (
        <div className='footer'>
            <Container>
                <div className='footer__box'>
                    <div><img src={footer} alt="" /></div>
                    <div className='footer__location'>
                        <h4>Bog’lanish</h4>
                        <div className='footer__contact__card'>
                            <div className='footer__contact__card__img'>
                                <img src={location} alt="" />
                            </div>
                            <div className='footer__contact__card__about'>
                                <p>8819 Ohio St. South Gate,CA 90280</p>
                            </div>
                        </div>
                        <div className='footer__contact__card'>
                            <div className='footer__contact__card__img'>
                                <img src={email} alt="" />
                            </div>
                            <div className='footer__contact__card__about'>
                                <p>farruxnorov74@gmail.com</p>
                            </div>
                        </div>
                        <div className='footer__contact__card'>
                            <div className='footer__contact__card__img'>
                                <img src={call} alt="" />
                            </div>
                            <div className='footer__contact__card__about'>
                                <p>+996790683</p>
                            </div>
                        </div>
                    </div>
                    <div className='footer__link'>
                        <h4>Xizmatlar</h4>
                        <ul className='footer__link__list'>
                            <li className='footer__link__list__item'>
                                <a
                                    exact
                                    href="#about"
                                    activeClassName="active"
                                >
                                    Asosiy
                                </a>
                            </li>
                            <li className='footer__link__list__item'>
                                <a
                                    exact
                                    href="#servic"
                                    activeClassName="active"
                                >
                                    Xizmatlar
                                </a>
                            </li>
                            <li className='footer__link__list__item'>
                                <a
                                    exact
                                    href="#footer"
                                    activeClassName="active"
                                >
                                    Kserokopiya
                                </a>
                            </li>
                            <li className='footer__link__list__item'>
                                <a
                                    exact
                                    href="#footer"
                                    activeClassName="active"
                                >
                                    Scaner
                                </a>
                            </li>
                            <li className='footer__link__list__item'>
                                <a
                                    exact
                                    href="#footer"
                                    activeClassName="active"
                                >
                                    Taklifnoma
                                </a>
                            </li>
                            <li className='footer__link__list__item'>
                                <a
                                    exact
                                    href="#footer"
                                    activeClassName="active"
                                >
                                    Pereplyot
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer__link'>
                        <h4>Qo’shimcha xizmatlar</h4>
                        <ul className='footer__link__list'>
                            <li className='footer__link__list__item'>
                                <a
                                    exact
                                    href="#about"
                                    activeClassName="active"
                                >
                                    Internet xizmatlari
                                </a>
                            </li>
                            <li className='footer__link__list__item'>
                                <a
                                    exact
                                    href="#servic"
                                    activeClassName="active"
                                >
                                    Kanselyariya mollari 
                                </a>
                            </li>
                            <li className='footer__link__list__item'>
                                <a
                                    exact
                                    href="#footer"
                                    activeClassName="active"
                                >
                                    Maishiy elektronika 
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='footer__box__two'>
                  <div className='footer__box__two__icons'>
                    <img src={teleg} alt="" />
                    <img src={insta} alt="" />
                  </div>
                  <div className='primeTech'>
                     <p>Sayt yaratuvhisi</p>
                      <a href="https://primetechgroup.uz/"><img src={primeTech} alt="" /></a>
                  </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer