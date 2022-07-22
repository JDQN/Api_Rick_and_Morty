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
      let h2;
      let button;

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

         button = document.createElement('a');
         button.innerHTML = `Ver caracteristicas`;
         button.href = `description.html?id=${element.id}`;
         

         div.append(h1,img,p,h2,button);
         this.#privateBody.append(div);
      })
   }
}