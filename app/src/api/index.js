export const apiKey = 'd3837c3a108a183f314a27cd41bd1464'
export const baseUrl = 'https://developers.zomato.com/api/v2.1'
export const options = {
  headers: {
    "Accept": "application/json",
    "user-key": apiKey
  }
}

// const url = "https://developers.zomato.com/api/v2.1/categories";
// fetch(url, options)
//   .then( res => res.json() )
//   .then( data => console.log(data) );

// export function fetchLocations(locationName) {
//   const url = baseUrl + '/locations?query=' + locationName
//   fetch(url, options)
//     .then(res => res.json())
//     .then( 
//       data => {
//       console.log(data)
//       return data
//     })
// }