const buttonSignup = document.querySelector('.form-button')

const inputs = document.querySelectorAll('input')
for (const input of inputs) {

  //! alert invalid
  input.addEventListener('focusout', () => {
    const parent = input.closest('.group-input')

    if (input.value === '') {
      parent.classList.add('invalid')
      parent.setAttribute('data-error', 'Vui lòng không để trống trường này!')
    }

  })
  //! end alert invalid

  input.addEventListener('change', () => {
    const parent = input.closest('.group-input')
    // !check checkbox agreement
    if (input.id === 'agreement') {
      if (!input.checked) {
        parent.classList.add('invalid')
      } else {
        parent.classList.remove('invalid')
      }
    }
    // !end check checkbox agreement
    
    // !check name
    if (input.id === 'name') {
      const nameRegex = /^[a-zA-Z ]{2,30}$/
      if (!nameRegex.test(input.value)) {
        parent.classList.add('invalid')
        parent.setAttribute('data-error', 'Tên không hợp lệ! (Tối thiểu 2 ký tự, tối đa 30 ký tự, không bao gồm số)')
      } else {
        parent.classList.remove('invalid')
      }
    }
    // !end check name

    // !check username
    if (input.id === 'username') {
      const usernameRegex = /^[a-zA-Z0-9]{6,30}$/
      if (!usernameRegex.test(input.value)) {
        parent.classList.add('invalid')
        parent.setAttribute('data-error', 'Tên đăng nhập không hợp lệ!(tối thiểu 6 ký tự, tối đa 30 ký tự)')
      } else {
        parent.classList.remove('invalid')
      }
    }
    // !end check username

    
    // !check email
    if (input.type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(input.value)) {
        parent.classList.add('invalid')
        parent.setAttribute('data-error', 'Email không hợp lệ!(example@gmail.com)')
        console.log(parent)
      } else {
        parent.classList.remove('invalid')
      }
    }
    // !end check email

    // !check password
    if (input.id === 'password') {
      const passwordRegex = /^[a-zA-Z\d]{8,}$/
      if (!passwordRegex.test(input.value)) {
        parent.classList.add('invalid')
        parent.setAttribute('data-error', 'Mật khẩu không hợp lệ! (tối thiểu 8 ký tự)')
      } else {
        parent.classList.remove('invalid')
      }
    }
    // !end check password


    // !check confirm-password
    if (input.id === 'confirm-password') {
      const password = document.getElementById('password')
      if (input.value !== password.value) {
        parent.classList.add('invalid')
        parent.setAttribute('data-error', 'Mật khẩu không khớp!')
      } else {
        parent.classList.remove('invalid')
      }
    }
    // !end check confirm-password

    // !check full input
    let isOk = true
    for (const item of inputs) {
      if (item.type === 'checkbox' && !item.checked) {
        console.log(item)
        isOk = false
        break
      }
      if (item.closest('.group-input').classList.contains('invalid')) {
        isOk = false
        console.log(item)
        break
      }
    }
    // !end check full input
    console.log(isOk)
    if (isOk) {
      buttonSignup.classList.remove('disabled')
    } else {
      buttonSignup.classList.add('disabled')
    }
  })
}