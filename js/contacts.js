var fields = form.querySelectorAll('.field')

form.addEventListener('submit', function (event) {
  event.preventDefault()

  for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      console.log('field is blank', fields[i])
    }
  }
})

for (var i = 0; i < fields.length; i++) {
  if (!fields[i].value) {
    console.log('field is blank', fields[i])
    var error = document.createElement('div')
    error.className='error'
    error.style.color = 'red'
    error.innerHTML = 'Cannot be blank'
    form[i].parentElement.insertBefore(error, fields[i])
  }
}
