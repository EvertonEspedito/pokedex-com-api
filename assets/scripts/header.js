//rolagem do cabeçalho

const headerpoke = document.getElementById('header')

window.addEventListener('scroll',()=>{
    headerpoke.classList.toggle('rolagem',window.scrollY>0);
})