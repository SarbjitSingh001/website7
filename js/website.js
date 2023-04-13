const button = document.querySelector('.btn')
const search = document.querySelector('.search')


button.addEventListener('click', () => {
    search.classList.toggle('active')
})

const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActive()
        panel.classList.add('active')
    })
})


function removeActive() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => {
    container.classList.add('show-nav')
})

close.addEventListener('click', () => {
    container.classList.remove('show-nav')
})