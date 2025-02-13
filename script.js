async function fetchAndDisplayPokemon() {
  const pokemonGrid = document.getElementById('pokemon-grid');

  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
    const data = await response.json();
    const pokemonList = data.results;

    for (let i = 0; i < pokemonList.length; i++) {
      const pokemonResponse = await fetch(pokemonList[i].url);
      const pokemonData = await pokemonResponse.json();
      
      const pokemonCard = document.createElement('div');
      pokemonCard.classList.add('bg-blue-100', 'p-3', 'rounded-lg', 'shadow-md');
      
      pokemonCard.innerHTML = `
        <h2 class="text-xl font-bold mb-2">${pokemonData.name}</h2>
        <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}" class="mb-2">
        <p>Type: ${pokemonData.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
      `;
      
      pokemonGrid.appendChild(pokemonCard);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchAndDisplayPokemon();

