exports.fetchData = async (url) => {
  const axios = require("axios");
  const cheerio = require("cheerio");
  let result = await axios.get(url);
  return cheerio.load(result.data);
}