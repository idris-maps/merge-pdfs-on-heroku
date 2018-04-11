const axios = require('axios')
const fs = require('fs.promised')
const data = require('../assets/testUrls')
const url = 'https://pdf1234.herokuapp.com/'

axios.post(url, { pdfUrls: data }, { responseType: 'arraybuffer' })
  .then(res => fs.writeFile('assets/merged-from-heroku.pdf', res.data.toString('base64'), { encoding: 'base64' }))
  .then(console.log)
  .catch(console.log)