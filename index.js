async function getPollution () {
    try {
      const response = await fetch('https://api.websitecarbon.com/site?url=https%3A%2F%2Fwww.github.com%2F');
      if (!response.ok) {
        throw new Error(response.status);
      }
      const data = await response.json();
      console.log(`${data.url} produces ${data.statistics.co2.grid.grams} grams of CO2 per page load`);
    } catch (error) {
      console.error(error);
    }
  }

  getPollution()