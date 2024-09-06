async function getPollutionURL () {
    try {
      const response = await fetch('https://api.websitecarbon.com/site?url=https%3A%2F%2Fwww.github.com%2F');
      if (!response.ok) {
        throw new Error(response.status);
      }
      const data = await response.json();
      return data.url;
    } catch (error) {
      console.error(error);
    }
  }

  getPollutionURL()