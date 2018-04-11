const test = require('tape')
const fs = require('fs.promised')
const getPdfs = require('../lib/getPdfBuffers')
const mergePdfs = require('../lib/mergePdfs')
const urls = require('../assets/testUrls')

const onlyBuffers = arr =>
  !arr
    .map(item => Buffer.isBuffer(item))
    .includes(false)

test('getPdfs', t => {
  getPdfs(urls)
    .then(res => {
      t.true(onlyBuffers(res), 'should return an array of buffers')
      t.comment('mergePdfs')
      return mergePdfs(res)
    })
    .then(res => {
      t.true(Buffer.isBuffer(res), 'should return a buffer')
      return fs.writeFile('assets/merged.pdf', res.toString('base64'), { encoding: 'base64' })
    })
    .then(() => {
      t.end()
    })
    .catch(t.end)
})