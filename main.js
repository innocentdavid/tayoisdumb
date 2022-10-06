var button = document.querySelector('.fa-search')
var list = document.querySelector('.list')

var count = 0

button.addEventListener('click', function () {
    if (count == 0) {
        list.style.display = 'flex'
        count = 1
        return;
    }
    list.style.display = 'none'
    count = 0
    return
})