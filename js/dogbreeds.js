let api_url = "https://dogapi.dog/api/v2/breeds";
let pagination_url = "?page%5Bnumber%5D=1&page%5Bsize%5D=5";

async function fetchDogBreeds(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    data.data.forEach((breed) => {
      let breed_id = breed.id;
      
    
    
    });
  } catch (error) {
    console.error(error);
  }
}

async function fetchIndividualBreed(url) {
    try {
        let response = await fetch(url)
        let data = await response.json()
        
    }
} 


fetchDogBreeds(api_url + pagination_url);
fetchDogBr