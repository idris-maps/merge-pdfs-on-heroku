const axios = require('axios')
const data = require('../assets/testUrls')
const url = 'https://pdf1234.herokuapp.com/'

axios.post(url, { pdfUrls: data })
  .then(res => console.log(res.data))
  .catch(console.log)