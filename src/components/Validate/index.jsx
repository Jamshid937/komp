

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { validatePhoneContent, validatePhoneNumber, validateText } from './halper'
import classNames from 'classnames'
import classes from './Validate.module.css'

import girl from '../../Imgs/girl.png'
const initialData = {
    name: '',
    tell: '',
    text: '',
}
function Validate() {
    const [fields, setFields] = useState(initialData)
    const [disablad, setDisablad] = useState(true)
    const { t, i18n } = useTranslation();
    useEffect(() => {
        const isValid =

            validatePhoneNumber(fields.tell) &&
            validateText(fields.text)
        setDisablad(!isValid)

    }, [fields])
    const handleChange = (e) => {
        if (e.target.name === 'tell' && !validatePhoneContent(e.target.value))
            return
        setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }



    var sendtelegram = function (e) {



        setFields(initialData)
        e.preventDefault()


    }
    return (
        <div id='form'>

                <div className={classes['call__info']}>
                    <h2>Buyurtma berish</h2>
                </div>
                

               <div className={classes['call__flex']}> 
                <div className={classes['call__flex__img']}>
                    <img src={girl} alt="" />
                </div>
                <form className={classes['call__input']} onSubmit={sendtelegram} >
                    <input
                        type="tel"
                        placeholder='+998'
                        onChange={handleChange}
                        value={fields.tell}
                        name='tell'
                        maxLength={13}
                    />
                    <input
                        type="text"
                        placeholder='F.I.SH'
                        onChange={handleChange}
                        value={fields.text}
                        name='text'
                    ></input>
                    <button

                        className={classNames(classes['order-form__btn'], {
                            [classes['order-form__btn_disabled']]: disablad,
                        })}
                        disabled={disablad}
                    >
                        Buyurtma berish
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Validate