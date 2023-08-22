import React from 'react'
import { useTranslation } from 'react-i18next';

import Container from '../../layout/Container'
import about from '../../Imgs/about.png'
import './about.css'
const About = () => {
    const { t, i18n } = useTranslation();
    return (
        <Container>
            <div className='about'>
                <div className='about__img'>
                    <img src={about} alt="" />
                </div>
                <div className='about__info'>
                    <h2>{t('h2')}</h2>
                    <p>
                    {t('p')}
                    </p>
                </div>
            </div>
        </Container>
    )
}

export default About