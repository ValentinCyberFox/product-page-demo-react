import style from './AdsBlock.module.css'

function AdsBlock() {
  return (<>
    <div className={style.wrapper}>
      <div className={style.title}>
        Реклама
      </div>
      <div className={style.adsList}>
        <div className={style.adsItem}>
          <span>Здесь могла бы быть ваша реклама</span>
        </div>
        <div className={style.adsItem}>
          <span>Здесь могла бы быть ваша реклама</span>
        </div>
      </div>
    </div>
  </>
  );
}

export default AdsBlock;