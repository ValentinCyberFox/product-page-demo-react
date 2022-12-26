import style from './MainPage.module.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const MainPage = (props) => {

  const storeCart = useSelector((store) => store.cartReducer.products)
  localStorage.setItem('products', JSON.stringify(storeCart))

  const storeFavorite = useSelector((store) => store.favoriteReducer.products)
  localStorage.setItem('favorites', JSON.stringify(storeFavorite))

  return (<>
    <main className={style.main}>
      <div className={style.conteiner_content}>
        Здесь должно быть содержимое главной страницы.
        Но в рамках курса главная страница  используется лишь
        в демонстрационных целях
        <div className={style.link}>
          <Link to={'/product'}>Перейти на страницу товара</Link>
        </div>
      </div>
    </main>
    </>
  )
}

export default MainPage