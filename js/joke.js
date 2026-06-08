const API_KEY = "9253562fc0ea4280b4bbf3fcee5fc9f9";

const base_url = "https://api.humorapi.com/";

let jokebox = document.querySelector(".jokebox");
let memebox = document.querySelector(".memebox");

async function getRandomJoke() {
  //const url = base_url + "jokes/random?api-key=" + API_KEY;
  const url = "json/joke.json";

  try {
    let result = await fetch(url);
    let data = await result.json();

    jokebox.textContent = data.joke;
  } catch (err) {
    console.error(err);
  }
}

async function getRandomMeme() {
  //const url = base_url + "memes/random?api-key" + API_KEY;

  const url = "json/meme.json";

  try {
    let result = await fetch(url);
    let data = await result.json();
    console.log(data);
    memebox.innerHTML = `<img src='${data.url}' alt='meme' />`;
  } catch (err) {
    console.error(err);
  }
}

getRandomJoke();
getRandomMeme();
