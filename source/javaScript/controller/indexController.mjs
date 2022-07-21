"use strict"; // Esta línea asegura que solo se puede usar JavaScript

/**CONFIG, Importamos la clase config*/
import {Config} from '../config.mjs';

/**VIEWS, Importamos la Views*/
import {IndexView} from '../view/index.view.mjs';

/**MODELS, Importamos la clase user model*/
import {UserModel} from '../models/user.model.mjs'; 

/**SERVICIO, Importamos la clase rickAndMorty.services*/
import {RickAndMortyService} from '../models/services/rickAndMorty.services.mjs';

   /**
    * Clase indexController
   */
   class indexController{

      #privateUser; //Definimos una variable privada
      #privateRickAndMortyURL; //Definimos una variable privada
      #privateView; //Definimos una variable privada
      #RickAndMortyService; 


      /**
       * Creamos el constructor de la clase indexController
       */
      constructor(){
         this.#privateUser = new UserModel(); //Inicializamos la variable privada
         this.#privateRickAndMortyURL = Config.RickAndMortyAPI_URL;//Inicializamos la variable privada
         this.#privateView = new IndexView(); //Inicializamos la variable privada
         this.#RickAndMortyService = new RickAndMortyService(
            this.#privateRickAndMortyURL
         ); //Inicializamos la variable privada
      }

      async init(){
         const characters = await this.#RickAndMortyService.getCharacters(); //Creamos una variable que almacena el resultado de la llamada a la API
         this.#privateView.init(characters); //Inicializamos la variable privada
      }

   }

   const index = new indexController(); //Creamos una variable que almacena el resultado de la llamada a la apiCall
   index.init(); //Inicializamos la variable privada