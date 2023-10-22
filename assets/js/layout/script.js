// !toggle menu responsive
const toggleButtonMenu = document.querySelector('.toggle-button-navbar')
if (toggleButtonMenu) {
  toggleButtonMenu.addEventListener('click', () => {
    const collapsedNav = document.querySelector('.collapseNav')
    collapsedNav.classList.toggle('show')
    toggleButtonMenu.classList.toggle('collapsed')
  })
}

// ! end toggle menu responsive
