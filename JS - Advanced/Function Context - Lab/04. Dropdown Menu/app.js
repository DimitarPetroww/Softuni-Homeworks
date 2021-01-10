function solve() {
    let choose = document.querySelector('#dropdown')
    let box = document.querySelector('#box')
    let list = document.querySelector('#dropdown-ul')
    choose.addEventListener('click', () => {
        if(!list.style.display || list.style.display === 'none'){
        list.style.display = 'block'
        } else {
            list.style.display = 'none'
            box.style.color = 'white'
            box.style.backgroundColor = 'black'
        }
    })
    list.addEventListener( 'click', e => {
        box.setAttribute('style', `background-color:${e.target.textContent}`)
        box.style.color = 'black'
    })
}