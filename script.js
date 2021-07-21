const apiKey = 'INSERIR A CHAVE AQUI'

fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apiKey).then((response) => {
  if (!response.ok) throw new Error(`Erro ao executar a requisição, status ${response.status}`);
  return response.json();
})
  .then((api) => {
    console.log(api)

    let texto = "";
    for (let i = 0; i < 10; i++) {
      texto = texto + `
      <div class="media">
      <img src="./img/coin.jpg" class="align-self-center mr-3" alt="coin" width="100" height="60">
      <div class="media-body"></div>
      <h5 class="mt-2">${api.data[i].name}</h5 >
      <p>${api.data[i].symbol}</p>
    </div >
        `
      document.getElementById("coins").innerHTML = texto;
    }
  })
  .catch((error) => {
    console.error(error.message)
  })