import './css/reset.css'
import './css/style.scss'

document.addEventListener('DOMContentLoaded', function() {

  document.querySelector('.toggle-nav').addEventListener('click', function(e) {
    e.preventDefault()
    e.stopImmediatePropagation()

    document.body.classList.toggle('menu-opened')

    document.querySelectorAll('.nav-menu li').forEach(el => {
      
      el.classList.toggle('active')
      
    }) 

  })

})