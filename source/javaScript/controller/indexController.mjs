"use strict"; // Esta línea asegura que solo se puede usar JavaScript

/**CONFIG, Importamos la clase config*/
import {Config} from '../config.mjs';

/**VIEWS, Importamos la Views*/
import {IndexView} from '../view/index.view.mjs';

/**SERVICIO, Importamos la clase rickAndMorty.services*/
import {RickAndMortyService} from '../models/services/rickAndMorty.services.mjs';


   /**
    * Clase indexController
   */
class IndexController {

   #privateRickAndMortyURL;
   #privateView;
   #RickAndMortyService

   constructor() {
      this.#privateView = new IndexView();
      this.#privateRickAndMortyURL = Config.RickAndMortyAPI_URL;
      this.#RickAndMortyService = new RickAndMortyService(this.#privateRickAndMortyURL)
   }

   async init() {
      const characters = await this.#RickAndMortyService.characters
      this.#privateView.init(characters);
   }
} 

export const index = new IndexController();
index.init();