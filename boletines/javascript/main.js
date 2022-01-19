// obtener los elementos de la clase .close

let links = document.querySelectorAll("close");

// Recorrerlos

  links.forEach(function(links){

  // Agregar un evento click a cada uno de ellos
      link.addEventListener("click",function(ev){
         ev.preventDefault();
         let countent = querySelector('.content');

         // Quitarle las clases de animacionque ya tiene
         content.classList.remove("animate__backInDown");
         content.classList.remove("animate__animated");

         // Agregar clases para animar su salida fadeOutUp
         content.classList.remove("animate__backInUp");
         content.classList.remove("animate__animated");

         setTimeout(function(){
           location.href = "/";
         },600);


         return false;

    });
});
