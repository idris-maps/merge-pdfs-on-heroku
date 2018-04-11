const axios = require('axios')
const data = require('../assets/testUrls')
const url = 'https://merge-pdf-test.herokuapp.com/'

axios.post(url, { pdfUrls: data })
  .then(res => console.log(res.data))
  .catch(console.log)