import React from 'react'
import Container from '../../layout/Container'
import about from '../../Imgs/about.png'
import './about.css'
const About = () => {
    return (
        <Container>
            <div className='about'>
                <div className='about__img'>
                    <img src={about} alt="" />
                </div>
                <div className='about__info'>
                    <h2>Biz haqimizda</h2>
                    <p>
                        Bundan buyon «NOROV FARRUX OMONTURDIYEVICH» oilaviy
                        korxonasi boshlig'i deb ataluvchi SOXIBA SHEXOVA BAFOYEVNA hamda
                        ishtirokchilar deb ataluvchi SOXIBA SHEXOVA BAFOYEVNA va FARRUX
                        NOROV OMONTURDIYEVICH bilan birgalikda O'zbekiston Respublikasining
                        «Oilaviy tadbirkorlik to'g'risida»gi Qonuni va boshqa qonun hujjatlari asosida
                        «NOROV FARRUX OMONTURDIYEVICH» oilaviy korxonasini (keyingi o'rinlarda «korxona» deb
                        yuritiladi) tashkil etdilar.
                    </p>
                </div>
            </div>
        </Container>
    )
}

export default About