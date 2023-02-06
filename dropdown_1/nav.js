document.querySelector('.menu').addEventListener('click', (event) => {
  console.log(event)
  if(event.target.nodeName !== 'SPAN') return;
  closeAllSubmenu(event.target.nextElementSibling);
  event.target.classList.add('active-span');
  event.target.nextElementSibling.classList.toggle('_active');
})

function closeAllSubmenu(current = null) {
  let parents =[];
  if (current) {
    let currentParent = current.parentNode;
    while(currentParent) {
      if (currentParent.classList.contains('menu')) break;
      if (currentParent.nodeName === 'UL') parents.push(currentParent);
      currentParent = currentParent.parentNode;
    }
  }
  let subMenu = document.querySelectorAll('.submenu');
  Array.from(subMenu).forEach(item => {
    if (item !== current && !parents.includes(item)) {
      item.classList.remove('_active');
      if(item.previousElementSibling.nodeName === 'SPAN') {
        item.previousElementSibling.classList.remove('active-span');
      }
    }
  });
}