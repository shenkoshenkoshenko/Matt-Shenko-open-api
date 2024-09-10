let urlInput = document.getElementById('url');
const fetchButton = document.getElementById('fetch');
const resetButton = document.getElementById('reset')
const outputMessage = document.getElementById('output-grams');



resetButton.style.display = 'none'



function reset() {
  resetButton.style.display = 'none';
  outputMessage.innerHTML = '';
  urlInput = document.getElementById('url').value = ""
}



async function getPollutionURL() {
  try {
    const response = await fetch(`https://api.websitecarbon.com/site?url=https%3A%2F%2F${urlInput}%2F`);
    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();
    outputMessage.innerHTML = `${data.url} produces ${data.statistics.co2.grid.grams} grams of CO2 per page load.`;

  } catch (error) {
      console.error(error);
      outputMessage.innerHTML = error;
      resetButton.style.display = '';
    }
}



fetchButton.addEventListener('click', getPollutionURL);



resetButton.addEventListener('click', reset)