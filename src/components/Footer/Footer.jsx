import style from './Footer.module.css'

const Footer = (props) => {
  return (<>
    <footer className={style.footer}>
      <div className={[style.content, style.container].join(' ')}>
        <div className={style.contentText}>
          <span className={style.title}> © ООО «МойМаркет», 2018-2022 </span> <br />
            Для уточнения информации звоните по&nbsp;номеру <a href="tel:79000000000">
              +7&nbsp;900&nbsp;000&nbsp;0000</a>,<br />
            а&nbsp;предложения по&nbsp;сотрудничеству отправляйте на&nbsp;почту <a
              href="mailto:partner@mymarket.com">partner@mymarket.com</a>
        </div>
        <div className={style.upBtn}>
          <a href="#top">Наверх</a>
        </div>
      </div>
    </footer>
  </>)
}

export default Footer