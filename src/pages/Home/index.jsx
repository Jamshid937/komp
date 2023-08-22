import React from 'react'

import NavBar from '../../components/NavBar/NavBar'
import Container from '../../layout/Container'
import About from '../../components/About'
import Validate from '../../components/Validate'

import xizmatlar from '../../Imgs/xizmatlar.png'
import kserokopiya from '../../Imgs/kserokopiya.png'
import additionalServices from '../../Imgs/additionalServices.png'
import konstavar from '../../Imgs/konstavar.png'
import Mask from '../../Imgs/Mask.png'
import './Home.css'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      <Container>
        <div className='header__hero'>
          <div className='header__hero__info'>
            <h1>Internet va kserokopiya xizmatlari</h1>
            <img className='header__hero__info-img' src={kserokopiya} alt="" />
            <ul className='header__hero__info__list'>
              <li>Ilgari iste'molda bo'lgan tovarlar chakana savdosi;</li>
              <li>Kompyuterlar va periferik uskunalarni ta'mirlash;</li>
              <li>Kommunikatsiya uskunalarni ta'mirlash</li>
              <li>Maishiy elektronika jihozlarini ta'mirlash;</li>
              <li>Boshqa shaxsiy foydalanish buyumlari va maishiy tovarlarni ta'mirlash;</li>
              <li> Boshqa toifalarga kiritilmagan shaxsiy xizmatlar;</li>
              <li>Umumiy o`rta ta'lim;</li>
              <li>Boshqa huquqiy xizmatlar;</li>
            </ul>
            <button className='header__hero__info__btn'><a href="tel">Bog’lanish  (91) 911 06 83</a></button>
          </div>
          <div className='header__hero__img'>
            <img src={kserokopiya} alt="" />
          </div>
        </div>
        <About />
        <div className='xizmatlar'>
          <h2 className='xizmatlar__title'>xizmatlar</h2>
          <div className='xizmatlar__cards'>
            <div className='xizmatlar__cards__item'>
              <img src={xizmatlar} alt="" />
              <h4>Kserokopiya</h4>
              <p>Rangli va sifatli kserokopiya</p>
            </div>
            <div className='xizmatlar__cards__item'>
              <img src={xizmatlar} alt="" />
              <h4>Kserokopiya</h4>
              <p>Rangli va sifatli kserokopiya</p>
            </div>
            <div className='xizmatlar__cards__item'>
              <img src={xizmatlar} alt="" />
              <h4>Kserokopiya</h4>
              <p>Rangli va sifatli kserokopiya</p>
            </div>
            <div className='xizmatlar__cards__item'>
              <img src={xizmatlar} alt="" />
              <h4>Kserokopiya</h4>
              <p>Rangli va sifatli kserokopiya</p>
            </div>
            <div className='xizmatlar__cards__item'>
              <img src={xizmatlar} alt="" />
              <h4>Kserokopiya</h4>
              <p>Rangli va sifatli kserokopiya</p>
            </div>
            <div className='xizmatlar__cards__item'>
              <img src={xizmatlar} alt="" />
              <h4>Kserokopiya</h4>
              <p>Rangli va sifatli kserokopiya</p>
            </div>
            <div className='xizmatlar__cards__item'>
              <img src={xizmatlar} alt="" />
              <h4>Kserokopiya</h4>
              <p>Rangli va sifatli kserokopiya</p>
            </div>
            <div className='xizmatlar__cards__item'>
              <img src={xizmatlar} alt="" />
              <h4>Kserokopiya</h4>
              <p>Rangli va sifatli kserokopiya</p>
            </div>
            <div className='xizmatlar__cards__item'>
              <img src={xizmatlar} alt="" />
              <h4>Kserokopiya</h4>
              <p>Rangli va sifatli kserokopiya</p>
            </div>
          </div>
        </div>
        <div className='additionalServices'>
          <div className='additionalServices__img'>
            <img src={additionalServices} alt="" />
          </div>
          <div className='additionalServices__info'>
            <h2 className='additionalServices__info__title'>Qo’shimcha xizmatlar</h2>
            <p className='additionalServices__info__text'>
              Ixtisoslashgan do'konlarda kompyuterlar, periferik uskunalar va dasturiy
              ta'minot chakana savdosi;  - Ixtisoslashgan do'konlarda yoritish uskunalari va boshqa maishiy jihozlar
              chakana savdosi;
            </p>
            <button className='additionalServices__info__btn'><a href="">Buyurtma berish</a></button>
          </div>
        </div>
        <div className='Konstavar'>
          <h2 className='konstavar__title'>Kanselyariya mollari savdosi</h2>
          <div className='konstavar__cards'>
            <div className='konstavar__cards__item'>
              <img src={konstavar} alt="" />
              <h4>Daftar ruchka</h4>
            </div>
            <div className='konstavar__cards__item'>
              <img src={konstavar} alt="" />
              <h4>Daftar ruchka</h4>
            </div>
            <div className='konstavar__cards__item'>
              <img src={konstavar} alt="" />
              <h4>Daftar ruchka</h4>
            </div>
          </div>
        </div>
        </Container>
        <div className='repair'>
          <Container>
          <h2 className='repair__title'>Ta’mirlash xizmatlari</h2>
          <div className='repair__cards'>
            <div className='repair__cards__item'>
              <div className='repair__cards__item__img'>
                <img src={Mask} alt="" />
              </div>
              <h4 className='repair__cards__item__title'>Boshqa toifalarga kiritilmagan shaxsiy xizmatlar</h4>
              <p className='repair__cards__item__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
            <div className='repair__cards__item'>
              <div className='repair__cards__item__img'>
                <img src={Mask} alt="" />
              </div>
              <h4 className='repair__cards__item__title'>Boshqa toifalarga kiritilmagan shaxsiy xizmatlar</h4>
              <p className='repair__cards__item__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
            <div className='repair__cards__item'>
              <div className='repair__cards__item__img'>
                <img src={Mask} alt="" />
              </div>
              <h4 className='repair__cards__item__title'>Boshqa toifalarga kiritilmagan shaxsiy xizmatlar</h4>
              <p className='repair__cards__item__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
            <div className='repair__cards__item'>
              <div className='repair__cards__item__img'>
                <img src={Mask} alt="" />
              </div>
              <h4 className='repair__cards__item__title'>Boshqa toifalarga kiritilmagan shaxsiy xizmatlar</h4>
              <p className='repair__cards__item__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
            <div className='repair__cards__item'>
              <div className='repair__cards__item__img'>
                <img src={Mask} alt="" />
              </div>
              <h4 className='repair__cards__item__title'>Boshqa toifalarga kiritilmagan shaxsiy xizmatlar</h4>
              <p className='repair__cards__item__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
            <div className='repair__cards__item'>
              <div className='repair__cards__item__img'>
                <img src={Mask} alt="" />
              </div>
              <h4 className='repair__cards__item__title'>Boshqa toifalarga kiritilmagan shaxsiy xizmatlar</h4>
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