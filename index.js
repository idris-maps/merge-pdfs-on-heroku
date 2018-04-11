const express = require('express')
const bodyParser = require('body-parser')

const env = require('./lib/env')
const getPdfs = require('./lib/getPdfBuffers')
const merge = require('./lib/mergePdfs')

const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => res.status(200).json({msg: 'hello'}))

app.post('/', (req, res) => {
  const pdfUrls = req.body.pdfUrls
  if (!pdfUrls || !Array.isArray(pdfUrls)) {
    return res.status(400).json({ message: 'NO "pdfUrls" IN BODY' })
  }
  return getPdfs(pdfUrls)
    .then(merge)
    .then(buffer => res.status(200).json(buffer))
})

app.listen(env.port, () => {
  console.log(`Listening on ${env.port}`)
})