const search = document.getElementsByClassName('search')[0];
const btn = document.getElementsByClassName('btn')[0];
const input = document.getElementsByClassName('input')[0];

btn.addEventListener('click', () => {
    search.classList.add('active');
    input.focus();
    btn.setAttribute("disabled", "true");
})

input.addEventListener('focusout', () => {
    search.classList.remove('active');
    btn.removeAttribute("disabled");
})

