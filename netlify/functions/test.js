import fetch from 'node-fetch'

  

  exports.handler = async (event, context) => {
    const POKE_API = 'https://pokeapi.co/api/v2/pokedex/kanto'
    return fetch(POKE_API , { headers: { Accept: "application/json" } })
      .then((response) => response.json())
      .then((data) => ({
        statusCode: 200,
        body: JSON.stringify({ data })
      }))
      .catch((error) => ({ statusCode: 422, body: String(error) }));
  };