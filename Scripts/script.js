const btn = document.querySelector('#btn');
const menu = document.querySelector('.menu');

btn.addEventListener('click',ClassAdd)

function ClassAdd(){
    menu.classList.toggle('disable');
}

