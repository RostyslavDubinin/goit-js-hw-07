const incrementBtn = document.querySelector('#counter').lastElementChild;
const decrementBtn = document.querySelector('#counter').firstElementChild;

const int = document.querySelector('#value');
let integer = 0;

incrementBtn.addEventListener('click', onIncrementBtnClick);
decrementBtn.addEventListener('click', onDecrementBtnClick);

function onIncrementBtnClick () {
    integer += 1;
    int.innerHTML = integer;
};

function onDecrementBtnClick () {
    integer -= 1;
    int.innerHTML = integer;
};



