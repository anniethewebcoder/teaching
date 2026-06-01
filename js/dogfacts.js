api_url = "https://dogapi.dog/api/v2/facts?limit=5";

let heroRight = document.querySelector(".hero-right");
let factList = document.createElement("ul");
heroRight.append(factList);
let factButton = document.querySelector("#factButton");

factButton.addEventListener("click", function (event) {
  event.preventDefault();

  //   fetch(api_url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       data.data.forEach((fact) => {
  //         let factElement = document.createElement("li");
  //         factElement.textContent = fact.attributes.body;
  //         factList.append(factElement);
  //         console.log(fact.attributes.body);
  //       });
  //     })
  //     .catch((err) => console.error(err));

  async function fetchDogFacts() {
    try {
      let res = await fetch(api_url);
      let data = await res.json();
      console.log(data);

      data.data.forEach((fact) => {
        let factElement = document.createElement("li");
        factElement.textContent = fact.attributes.body;
        factList.append(factElement);
        console.log(fact.attributes.body);
      });
    } catch (err) {
      console.error(err);
    }
  }

  fetchDogFacts();
});
