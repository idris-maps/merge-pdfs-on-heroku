import * as test from 'tape'
import getPdfBuffers from '../utils/getPdfBuffers'
import mergePdfs from '../utils/mergePdfs'
import { COULD_NOT_DOWNLOAD_ALL_PDFS } from '../utils/errorMessages'

const urls = [
  'https://s3.eu-central-1.amazonaws.com/dev.static.simpego.ch/policies/717cbbf2-ad9f-428e-9d93-f80aed363cb9.pdf',
  'https://s3.eu-central-1.amazonaws.com/dev.static.simpego.ch/policies/3495aeeb-66ff-4107-b28e-e2d1e66ef170.pdf',
]

const isAnArrayOfBuffers = arr =>
  !arr
    .map(item => Buffer.isBuffer(item))
    .includes(false)

test('getPdfBuffers with existing urls', t => {
  getPdfBuffers(urls)
    .then(buffers => {
      t.true(isAnArrayOfBuffers(buffers))
      t.end()
    })
    .catch(t.end)
})

test('getPdfBuffers with not existing url', t => {
  const notExisting = 'http://localhost:3000/pdf/does-not-exist.pdf'
  getPdfBuffers([...urls, notExisting])
    .then(t.end)
    .catch(err => {
      t.same(err.message, COULD_NOT_DOWNLOAD_ALL_PDFS)
      t.end()
    })
})

test('mergePdfs', t => {
  getPdfBuffers(urls)
    .then(mergePdfs)
    .then(buffer => {
      t.true(Buffer.isBuffer(buffer))
      t.end()
    })
    .catch(t.end)
})