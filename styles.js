let sida = window.location.href;
     console.log(sida);
     let pattern = 'svenskafans';
     let result = sida.match(pattern);

     if (sida = result) {
     document.head.insertAdjacentHTML("beforeend", 
     `<style>
     .forum__post-textarea{resize:vertical !important;}
    textarea {resize:vertical !important;}  
 </style>`)
}



  