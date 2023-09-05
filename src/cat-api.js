const BASE_URL = "https://api.thecatapi.com/v1/breeds";
const API_KEY = "live_LRkzks08PAavXHHRSeKjPCWDogGgFHlsyqlYngH5q0KZC6GXAmBdxSJpOvCMpnHK";

export function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`)
      .then(response => {
          if (!response.ok) {
              throw new Error(response.status);
          }
          return response.json();
      });       
};

export function fetchCatByBreed(breedId) {
  return fetch(`${url}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`)
      .then(response => {
          if (!response.ok) {
              throw new Error(response.status);
          }
          return response.json();
      });  
};

