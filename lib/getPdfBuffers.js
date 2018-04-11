const axios = require('axios')

const getPdfBuffer = url =>
  axios.get(url, { responseType: 'arraybuffer' })
    .then(res => res.data)


module.exports = pdfUrls =>
  Promise.all(pdfUrls.map(getPdfBuffer))