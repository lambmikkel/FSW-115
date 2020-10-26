let axios = require('axios')

async function makeGetRequest() {

  let res = await axios.get("https://api.vschool.io/lambmikkel/todo/")

  let data = res.data;
  console.log(data)
}

makeGetRequest()

// async function makePostRequest() {

//   params = {
//       id: 1,
//       title: 'Pontiac Trans Am',
//       price: '3500',
//       description: 'American Sports Car'
//     }

//   let res = await axios.post('https://api.vschool.io/lambmikkel/todo/', params);

//   console.log(res.data);
// }

// makePostRequest();

// const fs = require('fs');

// var config = {
//     responseType: 'stream'
// };

// let url = 'https://i.pinimg.com/originals/1e/72/d7/1e72d7b34c373fc7af4d1e8f195d76ca.jpg';

// async function getImage() {

//     let resp = await axios.get(url, config);
//     resp.data.pipe(fs.createWriteStream('image.jpg'));
// }

// getImage();








