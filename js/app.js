const imagenes = document.querySelectorAll('.propiedad__imagen');
 
window.addEventListener('scroll', () => {
    // console.log(this.scrollY)
    const scroll = this.scrollY / -90;    
    imagenes.forEach( (imagen) => {
        imagen.style.backgroundPositionY = `${scroll}px`;
    })
});