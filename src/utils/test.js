import { DogApi } from "./API";

export async function someFunction() {
  const randomDog = await DogApi.randomDog();
}
