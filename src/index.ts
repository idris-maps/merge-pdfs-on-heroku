import * as express from 'express'
import * as  bodyParser from 'body-parser'
import { prop } from 'ramda'

import env from './processEnv'
import getPdfs from './utils/getPdfBuffers'
import mergePdfs from './utils/mergePdfs'
import { isAnArrayOfStrings } from './middleware/validateBody'
import {
  COULD_NOT_DOWNLOAD_ALL_PDFS,
  COULD_NOT_MERGE_PDFS,
  UNKNOWN_ERROR,
} from './utils/errorMessages'

const app = express()

app.use(bodyParser.json())

app.get('/', (req: express.Request, res: express.Response) =>
  res.status(200).json({msg: 'hello'}))

app.post('/merge-pdfs',
  [
    isAnArrayOfStrings(['pdfUrls']),
  ],
  (req: express.Request, res: express.Response) =>
    getPdfs(prop('pdfUrls', req.body))
      .then(mergePdfs)
      .then(buffer => res.status(200).send(buffer))
      .catch(err => {
        if (err.message === COULD_NOT_DOWNLOAD_ALL_PDFS || err.message === COULD_NOT_MERGE_PDFS) {
          return res.status(500).json(err)
        }
        return res.status(500).json({ message: UNKNOWN_ERROR })
      })
)

app.listen(env.port, () => {
  console.log(`Listening on ${env.port}...`)
})
