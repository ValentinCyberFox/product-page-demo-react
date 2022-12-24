import { useSelector } from 'react-redux';

import style from './ProductPageGallary.module.css'

function ProductPageGallary() {

  const storeColor = useSelector((store) => store.productColorReducer.productColorCurrent.productColor)

  return (
    <div className={`${style.gallary} ${style.container}`}>
      {storeColor.map(item => {
        return (
          <div className={style.gallary_img} key = {item}>
            <img src={item} alt=''></img>
          </div>
        )
      })}
    </div>
  );
}

export default ProductPageGallary;

