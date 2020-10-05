const apiKey = 'd3837c3a108a183f314a27cd41bd1464'
const url = "https://developers.zomato.com/api/v2.1/categories";

const options = {
  headers: {
    "Accept": "application/json",
    "user-key": apiKey
  }
};

fetch(url, options)
  .then( res => res.json() )
  .then( data => console.log(data) );