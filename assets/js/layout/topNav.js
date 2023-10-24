const getTopNav = (currentPageId) => {
  //! get _topnav
  fetch('_topnav.html')
    .then(response => response.text())
    .then(data => {
      const topNav = document.querySelector('.topnav')
      topNav.innerHTML = data

      topNav.querySelector(`#${currentPageId}`).classList.add('active')

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
    })
  //! end get _topnav
}

export default getTopNav