let btn = document.getElementById("btn");
let menu = document.querySelector('#drop');



btn.addEventListener('click', function(){
    btn.classList.toggle("activity");
    menu.classList.toggle('drop');
    
});
