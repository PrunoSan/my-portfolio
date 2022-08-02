const $html = document.querySelector('html')
const $checkbox = document.querySelector('#chk')



$checkbox.addEventListener('change',function(){
    if($checkbox.checked==true){
        $html.classList.toggle('dark-mode')
        document.getElementById("san").src="./imagem/logo2.png"
        document.getElementById("model").src="./imagem/bruno2.png"
        
        
    }
    else{
        $html.classList.toggle('dark-mode')
        document.getElementById("san").src="./imagem/logo.png"
        document.getElementById("model").src="./imagem/bruno3.png"
    }
})



function showModal() {
    var element = document.getElementById("modal");
    element.classList.add("show-modal");
}

function closeModal() {
    var element = document.getElementById("modal");
    element.classList.remove("show-modal");
}

