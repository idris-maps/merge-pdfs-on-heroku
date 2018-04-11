const axios = require('axios')

const getPdfBuffer = url =>
  axios.get(url, { responseType: 'arraybuffer' })
    .then(res => res.body)


module.exports = pdfUrls =>
  Promise.all([pdfUrls.map(getPdfBuffer)])