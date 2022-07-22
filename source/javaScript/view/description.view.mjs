'use strict';

export class DescriptionView {
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
      let h2;


      data.forEach((element) => {
         
         div = document.createElement('div');
         img = document.createElement('img');
         img.src= element.image;

         h1 = document.createElement('h1');
         h1.innerHTML = element.name;

         p = document.createElement('p');
         p.innerHTML = `Estado: ${element.status}`;

         h2 = document.createElement('h2');
         h2.innerHTML = `Especie: ${element.species}`;

         div.append(h1,img,p,h2);
         this.#privateBody.append(div);
      })
   }
}