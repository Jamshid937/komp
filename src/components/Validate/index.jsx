

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import $ from 'jquery'
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
    var telegram_bot_id = "6044421804:AAHHoJoX1szgVpwZBVxVxiAH6YKtBHzlL2M";
    var chat_id = 602198486; 
    var  tell, message;
    var ready = function() {
        tell = fields.tell;
        message = fields.text;
        message = "\nTell: " + tell + "\nIzoh: " + message;
    };


    var sendtelegram = function (e) {
        ready();
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "cache-control": "no-cache"
            },
            "data": JSON.stringify({
                "chat_id": chat_id,
                "text": message
            })
        };
        $.ajax(settings).done(function(response) {
        });


        setFields(initialData)
        e.preventDefault()


    }
    return (
        <div id='form' >

                <div className={classes['call__info']} id='boglanish'>
                    <h2>{t('h7')}</h2>
                </div>
                

               <div className={classes['call__flex']}> 
                <div className={classes['call__flex__img']}>
                    <img src={girl} alt="" />
                </div>
                <form className={classes['call__input']} onSubmit={sendtelegram} >
                    <input
                        type="tel"
                        placeholder='+998919110683'
                        onChange={handleChange}
                        value={fields.tell}
                        name='tell'
                        maxLength={13}
                    />
                    <input
                        type="text"
                        placeholder='OROV FARRUX OMONTURDIYEVICH'
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
                        {t('btn')}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Validate