const pdftk = require('node-pdftk')

module.exports = buffers =>
  pdftk
    .input(buffers)
    .output()