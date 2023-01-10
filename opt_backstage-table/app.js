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