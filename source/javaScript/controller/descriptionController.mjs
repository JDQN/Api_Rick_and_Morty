"use strict"; // Esta línea asegura que solo se puede usar JavaScript

/**CONFIG, Importamos la clase config*/
import {Config} from '../config.mjs';

/**VIEWS, Importamos la Views*/
import {DescriptionView} from '../view/description.view.mjs';

/**SERVICIO, Importamos la clase rickAndMorty.services*/
import {RickAndMortyService} from '../models/services/rickAndMorty.services.mjs';


   /**
    * Clase indexController
   */
class DescriptionController {

   #privateRickAndMortyURL;
   #RickAndMortyService
   #descriptionView;

   constructor() {
      this.#descriptionView = new DescriptionView();
      this.#privateRickAndMortyURL = Config.RickAndMortyAPI_URL;
      this.#RickAndMortyService = new RickAndMortyService(this.#privateRickAndMortyURL);
   }

   async init() {
      const params = new URLSearchParams(window.location.search)
      const chacter = await this.#RickAndMortyService.characterByid(params.get("id"));
      const characters = [];
      characters.push(chacter)
      this.#descriptionView.init(characters); //llaman la funcion que crea el componente
   }
} 

export const index = new DescriptionController();
index.init();