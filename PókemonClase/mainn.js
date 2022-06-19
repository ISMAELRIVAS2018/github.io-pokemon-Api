const pokemonContainer = document.querySelector(".pokemon-container");


function fetchPokemon(id) {
// console.log(id)
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) =>
    
    {
      createPokemon(data);
    }
    );
}

function fetchPokemons(number) {
    for (let i = 1; i <= number; i++){
        fetchPokemon(i);
    }
}

function createPokemon(pokemon) {
    const card = document.createElement("div")
    card.classList.add("pokemon-block");



const spriteContaier = document.createElement("div");
spriteContaier.classList.add('img-container');

const sprite = document.createElement("img");
sprite.src = pokemon.sprites.front_default

spriteContaier.appendChild(sprite);

const number = document.createElement("p");
number.textContent = pokemon.id.toString();

const name = document.createElement("p");
name.classList.add("name");
name.textContent = pokemon.name

const hp = document.createElement("p");
hp.classList.add("hp")
hp.textContent = pokemon.stats[0].base_stat+ 'vidad'

const base_experience = document.createElement("p");
base_experience.classList.add("base_experience")
// console.log( pokemon)
base_experience.textContent = pokemon.base_experience+ 'Exp'


const types = document.createElement("div");
types.classList.add("types")
console.log(types.textContent = pokemon.types[0].type.name)

for(i=0; i<pokemon.types.lenght; i++){
  console.log(i)
  types.textContent = pokemon.types[0,1,2].type.name
}




card.appendChild(spriteContaier);
card.appendChild(number);
card.appendChild(name);
card.appendChild(hp)
card.appendChild(base_experience);
card.appendChild(types);

pokemonContainer.appendChild(card)
}

fetchPokemons(9);

