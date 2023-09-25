

const inputTag = document.querySelector('#input')
const addTag = document.querySelector('#add')
const subtractTag = document.querySelector('#subtract')
const submitTag = document.querySelector('#submit')
const equalsTag = document.querySelector('#equals')

submitTag.addEventListener('click', (e) => {
    e.preventDefault()
    value = inputTag.value
    value = add(value, addTag)
    value = subtract(value, subtractTag)
    equalsTag.textContent = `Equals: ${value}`
})

