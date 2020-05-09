const apiUrl = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72"; //url da api
const cardsContainer = document.querySelector("#cards"); //pega a div cards e slva em uma variavel
let data = []; //inicializa um array

async function fetchCards() {  //função que vai na api pegar os dados
  let response =  await fetch(apiUrl) //da um fetch na url
  return await response.json() //como a url retorna um json, ele pega  a resposta e retorna um json
}

function renderCards(cards) { //pega os cards que estamos passando(data) 
  cardsContainer.innerHTML = ""; //zera tudo o que tem na div
  cards.map(renderCard); //pega os cards que recebeu, da um map e renderiza
}

function renderCard(card) { 
  const div = document.createElement("div"); //cria uma div utilizando o document
  div.style.width = "20rem"; //adiciona alguns estilos
  div.style.margin = "2rem";
  div.className = "card";
  //injeta dentro da div o que quiser utilizando o template spread
  //card.photo= card é o que vem como parametro e photo é o que tem na api
  div.innerHTML = ` 
  <img src="${card.photo}" class="card-img-top" alt="${card.name}" />
  <div class="card-body">
    <h5 class="card-title">${card.name}</h5>
    <p class="card-text" >
      ${card.property_type}
    </p>
    <p class="card-price">
    R$${card.price},00
  </p>
  </div>
`;
  cardsContainer.appendChild(div); //coloca todos os elementos dentro da div principal
}

async function main() { //pega a resposta (data) e da um await porque ela precisa esperar aquela resposta da fetch card
  data = await fetchCards(); //data contem o json da api
  if(data) {
    renderCards(data); //se tiver data renderiza os cards
  }
}

main();
