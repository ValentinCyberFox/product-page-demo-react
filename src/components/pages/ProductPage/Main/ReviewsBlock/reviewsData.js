import img1 from './img/review-1.jpeg'
import img2 from './img/review-2.jpeg'
import star from './img/star.png'
import goldstar from './img/gold-star.png'



const raitingArr = (raiting) => {
  let reviewRaitingArray = []
  for (let i = 0; i < 5; i++) {
    reviewRaitingArray[i] = star
  }

  for (let i = 0; i < (raiting); i++) {
    reviewRaitingArray[i] = goldstar
  }
  return reviewRaitingArray
}


export const reviewsData = [

  {
    id: Math.random(),
    name: 'Марк Г',
    photo: img1,
    raiting: raitingArr(5),
    experiance: 'менее месяца',
    good: 'это мой первый айфон после после огромного количества телефонов на андроиде. всё плавно, чётко и красиво. довольно шустрое устройство. камера весьма неплохая, ширик тоже на высоте.',
    bad: 'к самому устройству мало имеет отношение, но перенос данных с андроида - адская вещь) а если нужно переносить фото с компа, то это только через itunes, который урезает качество фотографий исходное',
  },

  {
    id: Math.random(),
    name: 'Валерий Коваленко',
    photo: img2,
    raiting: raitingArr(4),
    experiance: 'менее месяца',
    good: 'OLED экран, Дизайн, Система камер, Шустрый А15, Заряд держит долго',
    bad: 'Плохая ремонтопригодность',
  },
]