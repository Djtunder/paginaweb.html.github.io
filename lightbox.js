const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const hamburguer1 = document.querySelector('.hamburger');
imagenes.forEach(imagen=> {
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
        
     
    })

})

contenedorLight.addEventListener('click', function (e) {
        if(e.target !== imagenesLight){
            contenedorLight.classList.toggle('show')
            imagenesLight.classList.toggle('showImage') 
            hamburguer1.style.opacity = '1' 
        }
    })

    function aparecerImagen(imagen) {
        imagenesLight.src = imagen
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        hamburguer1.style.opacity = '0';
    }
