const favorite = document.getElementsByClassName("btn btn--favorite");
const showDetails = document.getElementsByClassName("btn btn--details");
const containerItems = document.getElementById("items");
const verTodo = document.getElementById("vertodo");
const ocultar = document.getElementById("ocultar");
const tipodeinmueble = document.getElementById("tipodeinmueble");
const locations = document.getElementById("locations");
const btnSearch = document.getElementById("btnsearch");
let favoritos = JSON.parse(localStorage.getItem("favoritospage")) || [];
let mostrarArray = JSON.parse(localStorage.getItem("detallespage")) || [];

console.log(btnSearch);

const filterArray = (word, item) => {
  dataFiltered = data.filter((inmuebles) =>
    inmuebles.type.toLowerCase().includes(word.toLowerCase())
  );
  console.log(dataFiltered);
};
//el API se coloca al principio para encontrarla facilmente si se debe de modificar
const API_URL = "http://localhost:3000/arriendos";
console.log(API_URL);
//una forma de llamar algun elemento de html lo hago con documento.getElementById
const main = document.getElementById("items");
const search = document.getElementById("search");
const CHARACTER_URL = "hhttp://localhost:3000/arriendos"
//Consulta de api con la url de la variable

const getCharacter = (character) => {
  const peticion = fetch(character);
  peticion
    .then((resp) => resp.json())
    .then((data) => showCharacter(data))
    .catch((error) => {
      console.log(error);
    });
};

getCharacter(API_URL);

const showCharacter = (characters) => {
  if (characters.length == 0) {
    console.log("el api no es correcto");
  } else {
    main.innerHTML = ``;
    characters.forEach((element) => {
      const {
        id, type, location, price, space, park, image, status
      } = element;
      const divCharacter = document.createElement("div");
      divCharacter.innerHTML = `
      <article class="cards">
          <figure>
          <img src="${image}" alt="propertys" class="cardsimage">
          </figure>
          <div class="carddescription">
          <div class="descriptionname">
          <p>type:${type}</p>
          <p>location:${location}</p>
          <p>price:${price}</p>
          <p>space:${space}</p>
          <p>parking:${park}</p>
          <p>status:${status}</p>
          </div>
          <div class="descriptiondetails">
          <p>${type}</p>
          <p>${location}</p>
          <p>${price}</p>
          <p>${space}</p>
          <p>${park}</p>
          <p>${status}</p>
                      </div>
                      </div>
                      <div class="actions">
                      <button class="btn btn--details" name="${id}">show details</button>
                      <button class="btn btn--favorite" name="${id}">favorite</button>
                      </div>
                      </article>
        `;
      main.appendChild(divCharacter);
    });
  }
};

const form = document.getElementById("formularioTipoInmueble");

form.onclick = (e) => {
  e.preventDefault();
  let selector = tipodeinmueble.value
  getCharacter(API_URL+"/?type="+selector)
}

const form2 =document.getElementById("localizacionInmuebles")

form2.onclick = (e) =>{
  e.preventDefault();
  let localizacion = locations.value
  getCharacter(API_URL+"/?location="+localizacion)
}



