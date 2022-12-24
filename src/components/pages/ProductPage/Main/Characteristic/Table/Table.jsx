import style from './Table.module.css';

const TableCharacterictics = () => {
  return (
    <table className={style.content}>
      <thead className={style.header}>
        <tr>
          <th><span className={style.headerTitle}>Модель</span></th>
          <th><span className={style.headerTitle}>Вес</span></th>
          <th><span className={style.headerTitle}>Высота</span></th>
          <th><span className={style.headerTitle}>Ширина</span></th>
          <th><span className={style.headerTitle}>Толщина</span></th>
          <th><span className={style.headerTitle}>Чип</span></th>
          <th><span className={style.headerTitle}>Объем памяти</span></th>
          <th><span className={style.headerTitle}>Аккумулятор</span></th>
        </tr>
      </thead>
      <tbody className={style.mainBlock}>
        <tr>
          <td>IPhone 11</td>
          <td>194 грамма</td>
          <td>150.9 мм</td>
          <td>75.7 мм</td>
          <td>8.3 мм</td>
          <td>A13 Bionic chip</td>
          <td>до 128 Гб</td>
          <td>До 17 часов</td>
        </tr>
        <tr>
          <td>IPhone 12</td>
          <td>164 грамма</td>
          <td>146.7 мм</td>
          <td>71.5 мм</td>
          <td>7.4 мм</td>
          <td>A14 Bionic chip</td>
          <td>до 256 Гб</td>
          <td>До 19 часов</td>
        </tr>
        <tr>
          <td>IPhone 13</td>
          <td>174 грамма</td>
          <td>146.7 мм</td>
          <td>71.5 мм</td>
          <td>7.65 мм</td>
          <td>A15 Bionic chip</td>
          <td>до 512 Гб</td>
          <td>До 19 часов</td>
        </tr>
      </tbody>
    </table>
  )
}

export default TableCharacterictics