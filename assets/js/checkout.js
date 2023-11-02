import getWall from './layout/wall.js'
import getTopNav from './layout/topNav.js'

getTopNav('')

getWall({
  title: 'Thanh toán',
  buttons:false,
  subContent:'',
  img:false
})

//! validate form checkout
const inputs = document.querySelectorAll('.input')
if (inputs && inputs.length > 0) {
  inputs.forEach(input => {
    input.addEventListener('focusout', () => {
      const value = input.querySelector('input').value
      if (!value) {
        input.classList.add('invalid')
        input.setAttribute('data-error', 'Vui lòng điền!')
      } else {
        const type = input.querySelector('input').type
        if (type === 'email') {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (!emailRegex.test(value)) {
            input.classList.add('invalid')
            input.setAttribute('data-error', 'Email không hợp lệ!(example@gmail.com)')
            return
          }
        }
        input.classList.remove('invalid')
      }
    })

    input.addEventListener('change', () => {
      const value = input.querySelector('input').value
      const type = input.querySelector('input').type
      if (type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) {
          input.classList.add('invalid')
          console.log('1')
          input.setAttribute('data-error', 'Email không hợp lệ!(example@gmail.com)')
        } else {
          input.classList.remove('invalid')
          console.log('2')
        }
      }
    })
  })
}