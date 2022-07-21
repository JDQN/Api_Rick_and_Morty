'use strict';

export class UserModel {
   #privateName;
   #privateLastname;

   constructor() {
      this.#privateName = '';
      this.#privateLastname = '';
   }

   get Name() {
      return this.#privateName;
   }

   set Name(name) {
      this.#privateName = name;
   }

   get Lastname() {
      return this.#privateLastname;
   }

   set Lastname(lastname) {
      this.#privateLastname = lastname;
   }

   toString() {
      return `${this.#privateName} ${this.#privateLastname}`;
   }
}