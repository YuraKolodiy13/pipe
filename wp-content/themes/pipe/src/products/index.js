if(document.querySelector('.categories__current')){
    let currentCat = document.querySelector('.categories__current');
    currentCat.innerHTML = document.querySelector('.categories--mob li.active').textContent;
    document.querySelector('.categories--mob li.active').style.display = 'none';
    currentCat.addEventListener('click', function () {
        $('.categories__current').next().stop().slideToggle();
        this.classList.toggle('changeArrow');
    })
}