export class Character{

   /**
    * Primero colocamos los atributos que queremos que sean accesibles
    * desde afuera de la clase.como id, name, status etc
    */
   #id;
   #name;
   #status;
   #species;
   #image;


   /**
    * Luego creamos un constructor que recibe los datos que queremos
    */
   constructor(id,name,status,species,image){
      this.#id = id;
      this.#name = name;
      this.#status = status;
      this.#species = species;
      this.#image = image;
   }

   /**
    * Y finalmente creamos una función que nos devuelve los datos
    */
   get id(){
      return this.#id;
   }
   get name(){
      return this.#name;
   }
   get status(){
      return this.#status;
   }
   get species(){
      return this.#species;
   }
   get image(){
      return this.#image;
   }
}

/**
 * La clase character.mjs es una clase en la cual se definen los atributos
 */