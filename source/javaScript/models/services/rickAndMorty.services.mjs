import {Character} from '../character.mjs'; //Importamos la clase character.mjs

export class RickAndMortyService{

   //#privateUrl = 'https://rickandmortyapi.com/api/character/';
   #privateUrl; //Definimos una variable privada
   #characters;//Creamos una variable que contenga un array vacio


   /**
    * Creamos un constructor que recibe la url que queremos usar
    */
   constrctor(url){
      this.#privateUrl = url; //Asignamos la url a la variable privada
      this.#characters = []; //Asignamos un array vacio a la variable characters
   }

   /**
    * Creamos una función que nos devuelve los datos
    */
   async #apiCall(){
      const response = await fetch(this.#privateUrl); //Creamos una variable que contenga la respuesta de la petición
      const {results} = await response.json(); //Creamos una variable que contenga los datos de la respuesta
      results.forEach(({id, name, status, specie, image}) => { //Recorremos el array de results y creamos una función que recibe los datos
         this.#characters.push(new Character(id, name, status, specie, image)); //Añadimos los datos a la variable characters
      });
      return this.#characters; //Devolvemos los datos
   } 

   /**
    * Creamos una función que nos devuelve los datos
    */
   
   /* async getCharacters(){
      return await this.#apiCall(); //Devolvemos los datos
   } */

   get Characters(){
      return this.#apiCall(); //Devolvemos los datos
   }



}

