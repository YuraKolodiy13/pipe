if(document.querySelector('.contactPage')){

    let wrap = document.querySelectorAll('h3 + div label');
    for(let i = 0; i < wrap.length; i++){
        wrap[i].parentElement.querySelector('span input').parentElement.appendChild(wrap[i]);
    }

    let fields = document.querySelectorAll('h3 + div input');
    for(let i = 0; i < fields.length; i++){
        fields[i].addEventListener('input', function () {
            if(this.value !== ''){
                this.classList.add('is-completed');
            }else {
                this.classList.remove('is-completed');
            }
        })
    }
}