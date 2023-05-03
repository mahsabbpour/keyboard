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
    _btn[i].onclick = function () {
        _child[0].innerHTML = value + this.innerHTML
        value = value + this.innerHTML
    }

}


// *******************space
btnSpace.onclick = function () {
    _child[0].innerHTML = value + '&nbsp;'
    value = value + ' '
}



// *******************clear
btnClear.onclick = function () {
    value = value.substring(0, (value.length) - 1)
    _child[0].innerText = value
}

// *********************return
btnRtrn.onclick = function () {
    _child[0].innerHTML = value + '\n'
    value = value + '\n'
}

// ************************_upperCase
_upper.onclick = function () {
    if (flag % 2) {

        for (i = 0; i < _btn.length; i++) {
            _upperCase = _btn[i].getAttribute('data-up')
            this.children[0].classList.add('bi-arrow-up-circle-fill')
            this.children[0].classList.remove('bi-arrow-up-circle')
            _btn[i].innerHTML = ''
            _btn[i].innerText = _upperCase

        }
    } else {

        for (i = 0; i < _btn.length; i++) {
            _lowerCase = _btn[i].getAttribute('data-low')
            this.children[0].classList.add('bi-arrow-up-circle')
            this.children[0].classList.remove('bi-arrow-up-circle-fill')
            _btn[i].innerHTML = ''
            _btn[i].innerText = _lowerCase
        }
    }

    flag++
}


