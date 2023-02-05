const managers = new Swiper('.section-managers__swiper', {
  // Optional parameters
  // direction: 'horizontal',
  loop: false,

  breakpoints: {

    320: {
      slidesPerView: 1,
      spaceBetween: 30,
      grid: {
        rows: 2,
      },
    },

    993: {
      direction: 'horizontal',
      slidesPerView: 2,
      spaceBetween: 30,
    },

    1200: {
      direction: 'horizontal',
      slidesPerView: 3,
      spaceBetween: 30,
    }
  },

  navigation: {
    nextEl: '.section-managers__next',
    prevEl: '.section-managers__prev',
  },
});


let managersList = [
  {
    name: 'Котов Евгений',
    about: 'Главный менеджер по развитию',
    phone: '+7 960 698-38-88',
    email: 'kotov.e@megamix.ru',
    photo: 'Cotov.jpg',
  },
  {
    name: 'Барбашинов Сергей',
    about: 'Старший региональный менеджер по ЦФО',
    phone: '+7 967 187-60-07',
    email: 'barbashinov.s@megamix.ru',
    photo: 'Barashinov.jpg',
  },
  {
    name: 'Коновалов Николай',
    about: 'Региональный менеджер по Приволжскому и Уральскому Федеральным округам, странам СНГ',
    phone: '+7 932 535-55-80',
    email: 'konovalov.n@megamix.ru',
    photo: 'konovalov.jpg',
  },
  {
    name: 'Воропанов Юрий',
    about: 'Менеджер по работе с Дистрибьюторами по ЦФО и Южный регион',
    phone: '+7 927 252-59-85',
    email: 'voropanov.y@megamix.ru',
    photo: 'Voropanov.jpg',
  },
  {
    name: 'Дончук Юлия',
    about: 'Руководитель подразделения Пятигорск, Республики Дагестан, Северная Осетия, Ингушетия, Карачаево-Черкесская, Кабардино-Балкарская, Чеченская. Ставропольский и Краснодарский край',
    phone: '+7 926 029-79-00',
    email: 'donchuk.u@megamix.ru',
    photo: 'donchuk.jpg',
  }
]


//Managers list

document.querySelector('.section-managers__swiper').querySelector('.section-managers__wrapper').innerHTML = ``
managersList.forEach((e, i) => {
  let dur = Math.round(Math.random() * (40 - 10) + 10)

  document.querySelector('.section-managers__swiper').querySelector('.section-managers__wrapper').innerHTML += `

    <div class="swiper-slide section-managers__slide">
    <svg class="section-managers__photo" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" id="blobSvg" style="opacity: 1;">
    <image class="section-managers__img" x="0" y="0" width="100%" clip-path="url(#shapeArticle${i})" xlink:href="./images/managers/${e.photo}" preserveAspectRatio="none"></image>
            </image>
            <clipPath id="shapeArticle${i}">
            <path id="blob" fill="url(#gradient)" style="opacity: 1;">
                <animate attributeName="d" dur="${dur}s" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;">
            </animate>
        </path>
        </clipPath>
        </svg>
        <div class="section-managers__contacts">
        <h2 class="section-managers__name-h2">
            ${e.name}
        </h2>
        <a class="section-managers__phone" href="tel:${e.phone}">
            ${e.phone}
        </a>
        <a class="section-managers__email" href="mailto:${e.email}">
            ${e.email}
        </a>
        <h3 class="section-managers__position-h3">
        ${e.about}
        </h3>
        </div>
    </div>
    `
})

