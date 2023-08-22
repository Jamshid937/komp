import React from 'react'
import { useTranslation } from 'react-i18next';

import NavBar from '../../components/NavBar/NavBar'
import Container from '../../layout/Container'
import About from '../../components/About'
import Validate from '../../components/Validate'
import Footer from '../../components/Footer'

import xizmatlar from '../../Imgs/xizmatlar.png'
import scaner from '../../Imgs/scaner.jpg'
import taklifnoma from '../../Imgs/taklifnoma.jpg'
import pereplyot from '../../Imgs/pereplyot.png'
import internet from '../../Imgs/internet.jpeg'
import aksesuar from '../../Imgs/acsesuars.jpg'
import konselariya from '../../Imgs/konselariya.jpg'
import compx from '../../Imgs/compx.jpg'
import paynet from '../../Imgs/paynet.jpg'


import kserokopiya from '../../Imgs/kserokopiya.png'
import additionalServices from '../../Imgs/additionalServices.png'
import konstavar from '../../Imgs/konstavar.png'
import Mask from '../../Imgs/Mask.png'
import naushnik from '../../Imgs/naushnik.png'
import comp from '../../Imgs/comp.png'
import nishon from '../../Imgs/nishon.png'
import ptichka from '../../Imgs/ptichka.png'
import raketa from '../../Imgs/raketa.png'

import sumka from '../../Imgs/sumka.webp'
import qalam from '../../Imgs/qalam.webp'
import './Home.css'


const Home = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <NavBar></NavBar>
      <Container>
        <div className='header__hero' id='header'>
          <div className='header__hero__info'>
            <h1>{t('h')}</h1>
            <img className='header__hero__info-img' src={kserokopiya} alt="" />
            <ul className='header__hero__info__list'>
              <li>{t('li')}</li>
              <li>{t('li1')}</li>
              <li>{t('li2')}</li>
              <li>{t('li3')}</li>
              <li>{t('li4')}</li>
              <li>{t('li5')}</li>
              <li>{t('li6')}</li>
              <li>{t('li7')}</li>
            </ul>
            <button className='header__hero__info__btn'><a href="tel:+998919110683">{t('phone')}</a></button>
          </div>
          <div className='header__hero__img'>
            <img src={kserokopiya} alt="" />
          </div>
        </div>
        <About />
        <div className='xizmatlar' id='servic'>
          <h2 className='xizmatlar__title'>{t('h3')}</h2>
          <div className='xizmatlar__cards'>
            <div className='xizmatlar__cards__item'>
              <img src={xizmatlar} alt="" />
              <h4>{t('span')}</h4>
              <p>{t('p2')}</p>
            </div>
            <div className='xizmatlar__cards__item'>
              <img src={scaner} alt="" />
              <h4>{t('li13')}</h4>
              <p>{t('p2')}</p>
            </div>
            <div className='xizmatlar__cards__item'>
              <img src={taklifnoma} alt="" />
              <h4>{t('li14')}</h4>
              <p>{t('p2')}</p>
            </div>
            <div className='xizmatlar__cards__item'>
              <img src={pereplyot} alt="" />
              <h4>{t('li15')}</h4>
              <p>{t('p2')}</p>
            </div>
            <div className='xizmatlar__cards__item'>
              <img src={internet} alt="" />
              <h4>{t('li16')}</h4>
              <p>{t('p2')}</p>
            </div>
            <div className='xizmatlar__cards__item'>
              <img src={aksesuar} alt="" />
              <h4>{t('acsesuars')}</h4>
              <p>{t('p2')}</p>
            </div>
            <div className='xizmatlar__cards__item'>
              <img src={konselariya} alt="" />
              <h4>{t('li12')}</h4>
              <p>{t('p2')}</p>
            </div>
            <div className='xizmatlar__cards__item'>
              <img src={compx} alt="" />
              <h4>{t('comp')}</h4>
              <p>{t('p2')}</p>
            </div>
            <div className='xizmatlar__cards__item'>
              <img src={paynet} alt="" />
              <h4>{t('PAYNET')}</h4>
              <p>{t('p2')}</p>
            </div>
          </div>
        </div>
        <div className='additionalServices' id='qoshimcha'>
          <div className='additionalServices__img'>
            <img src={additionalServices} alt="" />
          </div>
          <div className='additionalServices__info'>
            <h2 className='additionalServices__info__title'>{t('h4')}</h2>
            <p className='additionalServices__info__text'>
            {t('p3')}
            </p>
            <button className='additionalServices__info__btn'><a href="#boglanish">{t('btn')}</a></button>
          </div>
        </div>
        <div className='Konstavar' id='konselariya'>
          <h2 className='konstavar__title'>{t('h5')}</h2>
          <div className='konstavar__cards'>
            <div className='konstavar__cards__item'>
              <img src={konstavar} alt="" />
              <h4>{t('span2')}</h4>
            </div>
            <div className='konstavar__cards__item'>
              <img src={sumka} alt="" />
              <h4>{t('span3')}</h4>
            </div>
            <div className='konstavar__cards__item'>
              <img src={qalam} alt="" />
              <h4>{t('span4')}</h4>
            </div>
          </div>
        </div>
        </Container>
        <div className='repair' id='tamirlash'>
          <Container>
          <h2 className='repair__title'>{t('h6')}</h2>
          <div className='repair__cards'>
            <div className='repair__cards__item'>
              <div className='repair__cards__item__img'>
                <img src={Mask} alt="" />
              </div>
              <h4 className='repair__cards__item__title'>{t('li5')}</h4>
              <p className='repair__cards__item__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
            <div className='repair__cards__item'>
              <div className='repair__cards__item__img'>
                <img src={comp} alt="" />
              </div>
              <h4 className='repair__cards__item__title'>{t('li2')}</h4>
              <p className='repair__cards__item__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
            <div className='repair__cards__item'>
              <div className='repair__cards__item__img'>
                <img src={nishon} alt="" />
              </div>
              <h4 className='repair__cards__item__title'>{t('li3')}</h4>
              <p className='repair__cards__item__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
            <div className='repair__cards__item'>
              <div className='repair__cards__item__img'>
                <img src={raketa} alt="" />
              </div>
              <h4 className='repair__cards__item__title'>{t('li1')}</h4>
              <p className='repair__cards__item__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
            <div className='repair__cards__item'>
              <div className='repair__cards__item__img'>
                <img src={ptichka} alt="" />
              </div>
              <h4 className='repair__cards__item__title'>{t('li19')}</h4>
              <p className='repair__cards__item__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
            <div className='repair__cards__item'>
              <div className='repair__cards__item__img'>
                <img src={naushnik} alt="" />
              </div>
              <h4 className='repair__cards__item__title'>{t('li5')}</h4>
              <p className='repair__cards__item__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
            
          </div>
        </Container>
        </div>
        <Container>
        <Validate/>
        </Container>
       <Footer/>
    </>



  )
}

export default Home