import style from './Sidebar.module.css'
import favoriteImg from './img/favorite.png'
import favoriteImgOk from './img/favoriteOk.png'

import { useDispatch, useSelector } from 'react-redux'
import { addProduct, removeProduct } from '../../../../../redux/reducers/cartReducer'
import { addFavorite, removeFavorite } from '../../../../../redux/reducers/favoriteReducer'
import { productDescription } from '../../../../../data/appleIphone13/productDescription'

import AdsBlock from '../AdsBlock/AdsBlock'

function Sidebar() {
  const dispatch = useDispatch()

  const productName = productDescription.productName
  const storeCartCount = useSelector((store) => store.cartReducer.products.length)
  const storeCart = useSelector((store) => store.cartReducer.products)
  localStorage.setItem('products', JSON.stringify(storeCart))

  const storeFavorite = useSelector((store) => store.favoriteReducer.products)
  const storeFavoriteCount = useSelector((store) => store.favoriteReducer.products.length)
  localStorage.setItem('favorites', JSON.stringify(storeFavorite))

  const handleAddToCart = (e, productName) => {
    if (storeCart.some(product => product.id === productDescription.id)) {
      dispatch(removeProduct(productDescription))
    } else {
      dispatch(addProduct(productDescription))
    }
  }

  const handleAddToFavorite = (e, productName) => {
    if (storeFavorite.some(product => product.id === productDescription.id)) {
      dispatch(removeFavorite(productDescription))
    } else {
      dispatch(addFavorite(productDescription))
    }
  }

  const btnCartText = storeCartCount !== 0 ? 'Товар уже в корзине' : 'Добавить товар в корзину'
  const btnCartSyle = storeCartCount !== 0 ? [style.buttonSidebar, style.buttonSidebar_checked].join(' ') : style.buttonSidebar
  const favoriteImgSet = storeFavoriteCount !== 0 ? favoriteImgOk : favoriteImg

  return (<>
    <div className={style.sidebar}>
      <div className={style.infoBlock}>
        <div className={style.header}>
          <div className={style.cost}>
            <div className={style.oldCoast}>
              <span className={style.oldCoasText}>{productDescription.cost}₽</span>
              <span className={style.sale}>
                -{productDescription.sale}%
              </span>
            </div>
            <span className={style.newCost}>{productDescription.newCost}₽</span>
          </div>
          <button className={style.favoriteImg} onClick={(e) => handleAddToFavorite(e, productName)}>
            <img src={favoriteImgSet} alt="избранное" />
          </button>
        </div>
        <div className={style.delivery}>
          <div>Самовывоз в четверг, 1 сентября — бесплатно</div>
          <div>Курьером в четверг, 1 сентября — бесплатно</div>
        </div>
        <button className={btnCartSyle} onClick={(e) => handleAddToCart(e, productName)} >
          {btnCartText}
        </button>
      </div>
      <div className={style.adsBlock}>
        <AdsBlock />
      </div>
    </div>
  </>);
}

export default Sidebar;