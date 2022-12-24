import style from './Characteristic.module.css'
import { ProductCharacteristics } from '../../../../../data/appleIphone13/productСharacteristics'
import TableCharacterictics from './Table/Table'
import ReviewBlock from '../ReviewsBlock/ReviewsBlock'

import { useDispatch, useSelector } from 'react-redux'
import { changeProductColor, changeProductMemory } from '../../../../../redux/reducers/productColorReducer'

function Characteristic() {

  const dispatch = useDispatch()
  const storeColorText = useSelector((store) => store.productColorReducer.productColorCurrent.name)
  const storeColorBtns = useSelector((store) => store.productColorReducer.productColorBtns)
  const storeMemoryConfigText = useSelector((store) => store.productColorReducer.productColorCurrent.memoryConfig)
  const storeMemoryConfigBtns = useSelector((store) => store.productColorReducer.productMemoryBtns)

  const handleChengeColor = (e, item) => dispatch(changeProductColor(item))
  const handleChengeMemory = (e, item) => dispatch(changeProductMemory(item))

  return (<>
    <div className={style.wrapper}>
      <div className={style.productColor}>
        <h3 className={style.title}>
          Цвет товара: {storeColorText}
        </h3>
        <div className={style.productImgBtns}>
          {storeColorBtns.map(item => {
            if (item.name === storeColorText) {
              return (
                <button className={`${style.btnImg} ${style.btn_current}`} onClick={(e) => handleChengeColor(e, item)} key = {item.name}>
                  <img src={item.btn} alt={item.name} />
                </button>
              )
            } else {
              return (
                <button className={`${style.btnImg}`} onClick={(e) => handleChengeColor(e, item)} key = {item.name}>
                  <img src={item.btn} alt={item.name} />
                </button>
              )
            }
          })
          }
        </div>
      </div>
      <div className={style.productMemory}>
        <h3 className={style.title}>
          Конфигурация памяти: {storeMemoryConfigText} ГБ
        </h3>
        <div className={style.productMemoryBtns}>
          {storeMemoryConfigBtns.map(item => {
            if (item === storeMemoryConfigText) {
              return (
                <button className={`${style.btnMemory} ${style.btn_current}`} onClick={(e) => handleChengeMemory(e, item)} key = {item}>
                  {item} ГБ
                </button>
              )
            } else {
              return (
                <button className={`${style.btnMemory}`} onClick={(e) => handleChengeMemory(e, item)} key = {item}>
                  {item} ГБ
                </button>
              )
            }
          })
          }
        </div>
      </div>
      <div className={style.productCharacteristic}>
        <h3 className={style.title}>
          Характеристики товара
        </h3>
        <div className={style.listCharacteristic}>
          <ul className={style.listCharacteristic_list}>
            <li className={style.listCharacteristic_item}>
              Дисплей: <span> {ProductCharacteristics.display}</span>
            </li>
            <li className={style.listCharacteristic_item}>
              Встроенная память: <span>{storeMemoryConfigText} ГБ</span>
            </li>
            <li className={style.listCharacteristic_item}>
              Операционная система: <span>{ProductCharacteristics.os}</span>
            </li>
            <li className={style.listCharacteristic_item}>
              Беспроводные интерфейсы:<span> {ProductCharacteristics.wirelessInterfaces}</span>
            </li>
            <li className={style.listCharacteristic_item}>
              Процессор: <span>{ProductCharacteristics.processor}</span>
            </li>
            <li className={style.listCharacteristic_item}>
              Вес:<span> {ProductCharacteristics.weight}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.productDescription}>
        <h3 className={style.title}>
          Описание
        </h3>
        <div className={style.productDescriptionText}>
          <p>Наша самая совершенная система двух камер<br />
            Особый взгляд на прочность дисплея.<br />
            Чип, с которым всё супербыстро.<br />
            Аккумулятор держится заметно дольше.<br />
            <i> 13 - сильный мира всего.</i>
          </p>
          <p>Мы разработали совершенно новую схему расположения и развернули
            объективы на 45 градусов. Благодаря этому внутри корпуса поместилась наша
            лучшая система двух камер с увеличенной матрицей широкоугольной камеры.
            Кроме того, мы освободили место для системы оптической стабилизации
            изображения сдвигом матрицы. И повысили скорость работы матрицы на
            сверхширокоугольной камере.</p>
          <p>Ноовая сверхширокоугольная камера видит больше деталей в тёмных областях
            снимков. Новая широкоугольная камера улавливает на 47% больше света для
            более качественных фотографий и видео. Новая оптическая стабилизация со
            сдвигом матрицы обеспечит чёткие кадры даже в неустойчивом положении.</p>
          <p> Режим «Киноэффект» автоматически добавляет великолепные эффекты перемещения
            фокуса и изменения резкости. Просто начните запись видео. Режим «Киноэффект»
            будет удерживать фокус на объекте съёмки, создавая красивый эффект размытия
            вокруг него. Режим «Киноэффект» распознаёт, когда нужно перевести фокус на другого
            человека или объект, который появился в кадре. Теперь ваши видео будут смотреться
            как настоящее кино.</p>
        </div>
      </div>
      <div className={style.productTable}>
        <h3 className={style.title}>
          Сравнение моделей
        </h3>
        <TableCharacterictics />
      </div>
      <ReviewBlock />
    </div>
  </>);
}

export default Characteristic;