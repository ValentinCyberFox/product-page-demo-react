import style from './Form.module.css'

import { useState } from 'react'

function Form() {
  const [inputName, setInputName] = useState(() => {
    return localStorage.getItem('username') || ''
  })
  const [inputRaiting, setInputRaiting] = useState(() => {
    return localStorage.getItem('raiting') || ''
  })

  const [inputNameStyle, setInputNameStyle] = useState(style.formInputName)
  const [inputRaitingStyle, setInputRaitingStyle] = useState(style.formInputRaiting)

  localStorage.setItem('raiting', inputRaiting)
  localStorage.setItem('username', inputName)

  const handleSubmit = (e) => {
    e.preventDefault()
    return handleValidate()
  }

  let handleValidate = (e) => {
    if ((/^[0-9]/.test(inputName)) ||
      inputName.match(/\d/) ||
      !inputName.trim().length) return setInputNameStyle([style.formInputName, style.formInputErrorName].join(' '))

    if (inputName.length < 2) return setInputNameStyle([style.formInputName, style.formInputErrorNameLenght].join(' '))

    if ((!/^[1-5]/.test(inputRaiting)) ||
      inputRaiting.length !== 1) return setInputRaitingStyle([style.formInputRaiting, style.formInputErrorRaiting].join(' '))
    else {
      alert('Ваш отзыв был успешно отправлен и будет отображён после модерации')
      setInputName('')
      setInputRaiting('')
      e.currentTarget.submit()
    }
  }

  let handleInputClick = () => {
    return (
      setInputNameStyle(style.formInputName),
      setInputRaitingStyle(style.formInputRaiting)
    )
  }

  const handleChangeName = (e) => {
    localStorage.setItem('username', e.target.value)
    setInputName(e.target.value)
  }

  const handleChangeRaiting = (e) => {
    localStorage.setItem('raiting', e.target.value)
    setInputRaiting(e.target.value)
  }

  return (<>
    <div className={style.form}>
      <span className={style.formTitle}>Добавить свой отзыв</span>
      <form action="#" method="post" onSubmit={handleSubmit}>
        <div className={style.inputs}>
          <div className={inputNameStyle}>
            <input onChange={handleChangeName} onClick={handleInputClick} value={inputName} type="text" placeholder='Имя и фамилия' />
          </div>
          <div className={inputRaitingStyle}>
            <input onChange={handleChangeRaiting} onClick={handleInputClick} value={inputRaiting} className={style.formInputRaiting} type="text" placeholder='Оценка' />
          </div>
        </div>
        <div className={style.textarea}>
          <textarea placeholder='Текст отзыва' ></textarea>
        </div>
        <div className={style.btnSubmit}>
          <button type='submit'>
            Отправить отзыв
          </button>
        </div>
      </form>
    </div>
  </>);
}

export default Form;