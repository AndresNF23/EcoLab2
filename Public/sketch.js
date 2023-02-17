const fetchPokemon = async (pokemon) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await response.json();
    return data;
  };
  
  const displayPokemon = async (pokemon) => {
    const pokemonData = await fetchPokemon(pokemon);
    const name = pokemonData.name;
    const image = pokemonData.sprites.versions["generation-v"]["black-white"].animated.front_default;
    const height = pokemonData.height; 
    const weight = pokemonData.weight;
    const types = pokemonData.types.map(type => type.type.name).join(", ");
    
    const pokemonElement = document.createElement("div");
    pokemonElement.innerHTML = `
      <h2>${name}</h2>
      <img src="${image}" alt="${name}"/>
      <p>Height: ${height}</p>
      <p>Weight: ${weight}</p>
      <p>Types: ${types}</p>
    `;
    document.body.appendChild(pokemonElement);
  };
  
  const pokemon = ["bulbasaur", "charmander", "squirtle"];
  pokemon.forEach(async (p) => {
    await displayPokemon(p);
  });