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
    const response = await fetch(`https://api.sampleapis.com/beers/stouts`);
    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();
    console.log ("data: ", data)
    outputMessage.innerHTML = `${data[0].name} \n ${data[0].price}`;

  } catch (error) {
      console.error(error);
      outputMessage.innerHTML = error;
      resetButton.style.display = '';
    }
}



fetchButton.addEventListener('click', getPollutionURL);



resetButton.addEventListener('click', reset)