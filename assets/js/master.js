let _btn = document.querySelectorAll('.btn')
let btnSpace = document.getElementById("btnSpace");
let btnRtrn = document.getElementById("btnRtrn");
let btnClear = document.getElementById("btnClear");
let _upper = document.querySelector('#upperCase')
let _child = document.querySelector('#txt').children
let flag = 1
let value = ''


// *****************
for (i = 0; i < _btn.length; i++) {

    _btn[i].addEventListener('click', function () {
        _child[0].innerHTML = value + this.innerHTML
        value = value + this.innerHTML
        _child[0].style.color = '  rgb(145, 253, 50)'



    })

    _btn[i].addEventListener('mousedown', function () {

        this.style.transform = 'scale(0.9)'

    })
    _btn[i].addEventListener('mouseup', function () {

        this.style.transform = 'scale(1)'

    })

}


// *******************space
btnSpace.addEventListener('click', function () {
    _child[0].innerHTML = value + '&nbsp;'
    value = value + ' '



})
btnSpace.addEventListener('mousedown', function () {

    this.style.transform = 'scale(0.9)'

})
btnSpace.addEventListener('mouseup', function () {

    this.style.transform = 'scale(1)'

})



// *******************clear
btnClear.addEventListener('click', function () {

    value = value.substring(0, (value.length) - 1)
    _child[0].innerText = value
})
btnClear.addEventListener('mousedown', function () {

    this.style.transform = 'scale(0.9)'

})
btnClear.addEventListener('mouseup', function () {

    this.style.transform = 'scale(1)'

})


// *********************return


btnRtrn.addEventListener('click', function () {
    _child[0].innerHTML = value + '\n'
    value = value + '\n'


})
btnRtrn.addEventListener('mousedown', function () {

    this.style.transform = 'scale(0.9)'

})


btnRtrn.addEventListener('mouseup', function () {

    this.style.transform = 'scale(1)'

})

// ************************_upperCase
_upper.addEventListener('click', function () {
    if (flag % 2) {

        for (i = 0; i < _btn.length; i++) {
            _upperCase = _btn[i].getAttribute('data-up')
            _btn[i].innerHTML = ''
            _btn[i].innerText = _upperCase

        }
    } else {

        for (i = 0; i < _btn.length; i++) {
            _lowerCase = _btn[i].getAttribute('data-low')
            _btn[i].innerHTML = ''
            _btn[i].innerText = _lowerCase
        }
    }

    flag++
})
_upper.addEventListener('mousedown', function () {

    this.style.transform = 'scale(0.9)'

})


_upper.addEventListener('mouseup', function () {

    this.style.transform = 'scale(1)'

})



