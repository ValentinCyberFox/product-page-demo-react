import style from './Footer.module.css'

import ScrollToTop from 'react-scroll-up'

const Footer = (props) => {
  return (<>
    <div className={style.footer}>
      <div className={style.content}>
        <div className={style.contentText}>
          <span className={style.title}> © ООО «МойМаркет», 2018-2022 </span> <br />
          Для уточнения информации звоните по&nbsp;номеру <a href="tel:79000000000">
            +7&nbsp;900&nbsp;000&nbsp;0000</a>,<br />
          а&nbsp;предложения по&nbsp;сотрудничеству отправляйте на&nbsp;почту <a
            href="mailto:partner@mymarket.com">partner@mymarket.com</a>
        </div>

        <ScrollToTop style={{ position: 'relative', bottom: '0', right: '0', color: '#008cf0' }} showUnder={160}>
          Наверх
        </ScrollToTop>
      </div>
    </div>
  </>)
}

export default Footer