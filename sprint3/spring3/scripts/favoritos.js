
let favoritos = JSON.parse(localStorage.getItem('favoritospage')) || [];

const containerCards = document.getElementsByClassName('items')[0];
console.log(containerCards);

const renderCards = () => {
  containerCards.innerHTML = "";
  favoritos.forEach((item) => {
    const fav = document.createElement("div")
    fav.innerHTML += `
          <article class="cards">
          <figure>
          <img src="${item.image}" alt="propertys" class="cardsimage">
          </figure>
          <div class="carddescription">
          <div class="descriptionname">
          <p>type:</p>
          <p>location:</p>
          <p>price:</p>
          <p>space:</p>
          <p>parking:</p>
          <p>status:</p>
          </div>
          <div class="descriptiondetails">
          <p>${item.type}</p>
          <p>${item.location}</p>
          <p>${item.price}</p>
          <p>${item.space}</p>
          <p>${item.park}</p>
          <p>${item.status}</p>
                      </div>
                      </div>
                      <div class="actions">
                      <button class="btn btn--details" name="${item.id}">show details</button>
                      <button class="btn btn--favorite" name="${item.id}">favorite</button>
                      </div>
                      </article>
                      `;
  });
  containerCards.appendChild(div)
};
renderCards()

