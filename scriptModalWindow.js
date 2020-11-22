document.querySelectorAll('[data-toggle-modal]').forEach((element) =>
    element.addEventListener('click', ()=> 
        Script()
    )
)

function Script(){
    document.querySelector('.modal').classList.toggle("modal-show");
    document.querySelector('.overlayer').classList.toggle("overlayer-on");
}


