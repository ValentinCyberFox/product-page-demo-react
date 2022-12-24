import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import style from './Header.module.css'

import cartImg from './img/header-cart.svg'
import favoriteImg from './img/header-favorite.svg'
import logoImg from './img/logoshop.svg'

const Header = () => {

  const storeCartCount = useSelector((store) => store.cartReducer.products.length)
  const storeFavoriteCount = useSelector((store) => store.favoriteReducer.products.length)

  const cartCount = storeCartCount !== 0 ? storeCartCount : ''
  const cartStyle = storeCartCount === 0 ? style.inactive : style.cartCount

  const favoriteCount = storeFavoriteCount !== 0 ? storeFavoriteCount : ''
  const favoriteStyle = storeFavoriteCount === 0 ? style.inactive : style.favoriteCount

  return (
    <>
      <header className={`${style.header} ${style.container}`}>
        <Link to={'/'}>
          <div className={style.logo}>
            <div className={style.logoImg}>
              <img src={logoImg} alt='логотип магазина' />
            </div>
            <div className={style.logoTitle}>
              <span>Мой</span>Маркет
            </div>
          </div>
        </Link>
        <div className={style.headerIcons}>
          <div className={style.iconCart}>
            <img src={favoriteImg} alt="Избранное" />
            <div className={favoriteStyle}>
              {favoriteCount}
            </div>
          </div>
          <div className={style.iconFavorite}>
            <img src={cartImg} alt="Корзина" />
            <div className={cartStyle}>
              {cartCount}
            </div>
          </div>

        </div>
      </header>
    </>
  )
}

export default Header