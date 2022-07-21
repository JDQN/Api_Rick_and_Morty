'use strict';

export class IndexView {
   #privateBody;

   constructor() {
      document.title = 'Rick and Morty';
      this.#privateBody = document.querySelector('body'); //Inicializamos la variable privada
   }

   init(data){
      this.#createComponent(data);
   }

   #createComponent(data){
      let div;
      let img;
      let h1;
      let p;

      data.forEach((element) => {
         div = document.createElement('div');
         img = document.createElement('img');
         img.src= element.image;

         h1 = document.createElement('h1');
         h1.innerHTML = element.name;

         p = document.createElement('p');
         p.innerHTML = `estado: ${element.status} Especies: ${element.species}`;

         div.appendChild(h1,img,p);
         this.#privateBody.appendChild(div);
         
      })
   }
}