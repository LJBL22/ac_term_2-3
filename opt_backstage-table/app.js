const adList = [
  {
    id: 1,
    title: 'A',
    advertiser: "Lorem",
    group: "JVMA",
    description: "ipsum dolor",
    price: 3000,
    start: "2023/1/1",
    end: "2023/6/30",
  },
  {
    id: 2,
    title: 'B',
    advertiser: "Lorem",
    group: "VG",
    description: "ipsum dolor",
    price: 5000,
    start: "2023/1/1",
    end: "2023/12/31",
  },
  {
    id: 3,
    title: 'AC',
    advertiser: "Lorem",
    group: "HHA",
    description: "ipsum dolor",
    price: 1000,
    start: "2023/1/1",
    end: "2023/4/30",
  },
  {
    id: 4,
    title: 'B',
    advertiser: "Lorem",
    group: "VG",
    description: "ipsum dolor",
    price: 5000,
    start: "2023/1/1",
    end: "2023/12/31",
  },
  {
    id: 5,
    title: 'A',
    advertiser: "Lorem",
    group: "JVMA",
    description: "ipsum dolor",
    price: 3000,
    start: "2023/1/1",
    end: "2023/6/30",
  },
  {
    id: 6,
    title: 'AC',
    advertiser: "Lorem",
    group: "HHA",
    description: "ipsum dolor",
    price: 1000,
    start: "2023/1/1",
    end: "2023/4/30",
  },
  {
    id: 7,
    title: 'B',
    advertiser: "Lorem",
    group: "VG",
    description: "ipsum dolor",
    price: 5000,
    start: "2023/1/1",
    end: "2023/12/31",
  },
  {
    id: 8,
    title: 'AC',
    advertiser: "Lorem",
    group: "HHA",
    description: "ipsum dolor",
    price: 1000,
    start: "2023/1/1",
    end: "2023/4/30",
  },
  {
    id: 9,
    title: 'AC',
    title: 'A',
    advertiser: "Lorem",
    group: "JVMA",
    description: "ipsum dolor",
    price: 3000,
    start: "2023/1/1",
    end: "2023/6/30",
  },
  {
    id: 10,
    title: 'AC',
    advertiser: "Lorem",
    group: "HHA",
    description: "ipsum dolor",
    price: 1000,
    start: "2023/1/1",
    end: "2023/4/30",
  },
  {
    id: 11,
    title: 'AC',
    advertiser: "Lorem",
    group: "HHA",
    description: "ipsum dolor",
    price: 1000,
    start: "2023/1/1",
    end: "2023/4/30",
  },
  {
    id: 12,
    title: 'AC',
    title: 'A',
    advertiser: "Lorem",
    group: "JVMA",
    description: "ipsum dolor",
    price: 3000,
    start: "2023/1/1",
    end: "2023/6/30",
  },
  {
    id: 13,
    title: 'AC',
    advertiser: "Lorem",
    group: "HHA",
    description: "ipsum dolor",
    price: 1000,
    start: "2023/1/1",
    end: "2023/4/30",
  }
]

const tableRow = document.querySelector('#table__body')
const darkModeToggle = document.querySelector('#dark__mode__toggle')

function toggleMenu({ target }) {
  if (target.matches('.cell__action__icon')) {
    const menu = target.nextElementSibling
    menu.classList.toggle('hidden')
  }
}

//dark mode
const darkModeToggleHandler = event => {
  const switchMode = document.querySelector('#app-root')
  switchMode.classList.toggle('theme-dark')
  //// 原寫法，搭配 change event
  // if (event.target.checked) {
  //   document.documentElement.setAttribute('data-theme', 'dark')
  // } else {
  //   document.documentElement.setAttribute('data-theme', 'light')
  // }
}

  // IIFE: render table row
  ; (function () {
    adList.forEach((ad) => {
      tableRow.innerHTML += `
    <tr class="table__row">
      <td class="table__cell table__cell--checkbox">
        <input type="checkbox" />
      </td>
      <td class="table__cell table__cell--id">${ad.id}</td>
      <td class="table__cell table__cell--name">${ad.title}</td>
      <td class="table__cell table__cell--advertiser">
        <span class="cell__advertiser__line">${ad.advertiser}</span>
        <span class="cell__advertiser__line cell__advertiser__line--group"
          >${ad.group}</span
        >
      </td>
      <td class="table__cell table__cell--description">${ad.description}</td>
      <td class="table__cell table__cell--price">${ad.price}</td>
      <td class="table__cell table__cell--starttime">${ad.start}</td>
      <td class="table__cell table__cell--endtime">${ad.end}</td>
      <td class="table__cell table__cell--action">
        <img
          class="cell__action__icon"
          src="./static/icons/menu.svg"
          id="action__input_${ad.id}"
          alt="menu"
        />
        <!-- menu -->
        <div
          class="action__menu hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="action__input_${ad.id}"
          id="action__menu_${ad.id}"
        >
          <menu class="menu__body">
            <menuitem class="menu__item">
              <img
                src="static/icons/duplicate.svg"
                class="menu__item__icon"
              />
              <span>Duplicate</span>
            </menuitem>
            <menuitem class="menu__item">
              <img
                src="static/icons/edit.svg"
                class="menu__item__icon"
              />
              <span>Edit</span>
            </menuitem>
            <menuitem class="menu__item">
              <img
                src="static/icons/delete.svg"
                class="menu__item__icon"
              />
              <span>Delete</span>
            </menuitem>
          </menu>
        </div>
      </td>
    </tr>
  `
    })
  })()

// eventListener
darkModeToggle.addEventListener('click', darkModeToggleHandler)

tableRow.addEventListener('click', toggleMenu);