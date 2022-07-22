import {Character} from '../character.mjs'; //Importamos la clase character.mjs

export class RickAndMortyService{

   //#privateUrl = 'https://rickandmortyapi.com/api/character/';
   #privateUrl; //Definimos una variable privada
   #characters;//Creamos una variable que contenga un array vacio


   /**
    * Creamos un constructor que recibe la url que queremos usar
    */
   constructor(url){
      this.#privateUrl = url; //Asignamos la url a la variable privada
      this.#characters = []; //Asignamos un array vacio a la variable characters
   }

   /**
    * Creamos una función que nos devuelve los datos
    */
   async #apiCall(){
   const request = await fetch(`${this.#privateUrl}/character`);   //Creamos una variable que contenga la respuesta de la petición
   const {results} = await request.json();                       //Creamos una variable que contenga los datos de la respuesta

   results.forEach(({id,name,status,species,image}) => {       //Recorremos el array de results y creamos una función que recibe los datos
         this.#characters.push(new Character(id,name,status,species,image)); //Añadimos los datos a la variable characters
      });
      return this.#characters; //Devolvemos los datos
   } 
   
   /**
    * Creamos una función que nos devuelve los datos
    */
   
   /* async getCharacters(){
      return await this.#apiCall(); //Devolvemos los datos
   } */

   get characters(){
      return this.#apiCall(); //Devolvemos los datos
   }

   async characterByid(id){
      const response = await fetch(`${this.#privateUrl}/character/${id}`); //Creamos una variable que contenga la respuesta de la petición
      const {id:newId,name,status,species,image} = await response.json(); //Creamos una variable que contenga los datos de la respuesta
      return new Character(newId,name,status,species,image); //Devolvemos los datos

   }
   
}

