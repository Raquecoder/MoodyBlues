const sortBtn = document.getElementById('sort-btn')
let container= document.getElementById('container')
                  
sortBtn.addEventListener('click', function(){
container.classList.toggle('reverse')
})
