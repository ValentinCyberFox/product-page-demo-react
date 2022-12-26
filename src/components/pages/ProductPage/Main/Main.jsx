import style from './Main.module.css'
import { productDescription } from '../../../../data/appleIphone13/productDescription'

import ProductPageGallary from './ProductPageGallary/ProductPageGallary';
import Characteristic from './Characteristic/Characteristic'
import Sidebar from './Sidebar/Sidebar';
import ReviewBlock from './ReviewsBlock/ReviewsBlock';

function Main() {

  return (<>
    <main className={`${style.main} ${style.container}`}>
      <div className={style.title}>
        {productDescription.productName}
      </div>
      <ProductPageGallary />
      <div className={style.mainBlock} >
        <Characteristic />
        <Sidebar />
      </div>
      <ReviewBlock />
    </main>
  </>);
}

export default Main;