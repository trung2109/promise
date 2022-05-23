const axios =  require ("axios");
axios.get("https://catfact.ninja/fact").then(result => console.log(result.data.fact));