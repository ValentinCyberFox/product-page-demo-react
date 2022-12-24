import style from './ReviewsBlock.module.css'

import { reviewsData } from './reviewsData'
import Form from './Form/Form';

function ReviewBlock() {

  return (<>
    <div className={style.reviewBlock}>
      <div className={style.titleBlock}>
        <div className={style.titles}>
          <span className={style.titleText}>Отзывы</span>
          <span className={style.titleCount}>425</span>
        </div>
      </div>
      <div className={style.reviewList}>
        {reviewsData.map((item, index) => {
          return (
            <div className={style.reviewItem} key = {item.id}>
              <div className={style.authorImg}>
                <img src={item.photo} alt={item.name} />
              </div>
              <div className={style.reviewContent}>
                <div className={style.reviewHeader}>
                  <span className={style.name}>
                    {item.name}
                  </span>
                  <div className={style.raiting}>
                    {
                      item.raiting.map(raiting => {
                        return <img src={raiting} alt=''/>
                      })
                    }
                  </div>
                </div>
                <div className={style.info}>
                  <div className={style.infoTitle}>
                    Опыт использования: <span>{item.experiance}</span>
                  </div>
                  <div className={style.infoTitle}>
                    Достоинства: <div className={style.infoTitleContent}> {item.good} </div>
                  </div>
                  <div className={style.infoTitle}>
                    Недостатки: <div className={style.infoTitleContent}>{item.bad}</div>
                  </div>
                  {index === (reviewsData.length - 1) ? '' : <div className={style.hr}></div>}
                </div>
              </div>
            </div>
          )
        })}
        <Form />
      </div>
    </div>
  </>);
}

export default ReviewBlock;