//target the input element
const input = document.querySelector('#action__input_1')
//click handler
const toggleMenu = event => {
  //target the menu element
  const menu = document.querySelector('#action__menu_1')
  menu.classList.toggle('hidden')
}
//bind the event
input.addEventListener('click', toggleMenu)

//dark mode
//target the switch element
const darkModeToggle = document.querySelector('#dark__mode__toggle')
//toggle handler
const darkModeToggleHandler = event => {
  const switchMode = document.querySelector('#app-root')
  switchMode.classList.toggle('theme-dark')
  // if (event.target.checked) {
  //   document.documentElement.setAttribute('data-theme', 'dark')
  // } else {
  //   document.documentElement.setAttribute('data-theme', 'light')
  // }
}
//bind the event
darkModeToggle.addEventListener('click', darkModeToggleHandler)

const adList = [
  {
    id: 1,
    title: 'A',
    advertiser: "Lorem",
    description: "ipsum dolor",
    price: 3000,
    start: "2023/1/1",
    end: "2023/6/30",
  },
  {
    id: 2,
    title: 'B',
    advertiser: "Lorem",
    description: "ipsum dolor",
    price: 5000,
    start: "2023/1/1",
    end: "2023/12/31",
  },
  {
    id: 3,
    title: 'AC',
    advertiser: "Lorem",
    description: "ipsum dolor",
    price: 1000,
    start: "2023/1/1",
    end: "2023/4/30",
  }
]

const tableRow = document.querySelector('#table__body')

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
          >Group</span
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
          id="action__input_1"
          alt="menu"
        />
        <!-- menu -->
        <div
          class="action__menu hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="action__input_1"
          id="action__menu_1"
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