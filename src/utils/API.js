import axios from "axios";

// Export an object containing methods we will use for accessing the Dog.Ceo API

//dog.ceo/api/breeds/image/random"

export class DogApi {
  static getRandomDog() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  }
  static getDogsOfBreed(breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  }

  static getBaseBreedsList() {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
}
