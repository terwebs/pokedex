const squareBtns = document.querySelector('.square-buttons')
const pokeImg =  document.querySelector('.poke-img')
const pokeId = document.querySelector(".poke-id")
const pokeHeight = document.querySelector(".poke-height")
const pokeWeight = document.querySelector(".poke-weight")

const pokeType1 = document.querySelector('.type1')
const pokeType2 = document.querySelector('.type2')

const form = document.querySelector('#search-form')

const createSquareBtns = function() {
  for (let i=1; i<= 10; i++){
    let btn = document.createElement('div')
    btn.classList = 'square-btn'
    squareBtns.appendChild(btn)
  }
}

createSquareBtns()

//listen to input to find the pokemon
form.addEventListener('submit', function(event){
  event.preventDefault();
  const formData = form.elements.name.value.toLowerCase() 
  getPoke(formData)
})


//check if pokemon has 2 types or one type
function checkTypes(pokemon){
  pokeType1.innerText = pokemon.data.types[0].type.name
  if (pokemon.data.types.length < 2){
    pokeType2.innerText = "-"
  } else {
  pokeType2.innerText = pokemon.data.types[1].type.name
  }
}

//submit a request based on the pokemon name or id
getPoke = async function(formData){
  const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${formData}`)
  pokeImg.src = pokemon.data.sprites.front_default
  pokeId.innerText = `#: ${pokemon.data.id}`
  pokeHeight.innerText = `Height: ${pokemon.data.height/10}m`
  pokeWeight.innerText = `Weight: ${pokemon.data.weight/10}kg`
  checkTypes(pokemon)  
}

getPoke('empoleon')

