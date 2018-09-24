import axios from 'axios'
import {
  COULD_NOT_DOWNLOAD_ALL_PDFS,
} from './errorMessages'

const getPdfBuffer = (url: string): Promise<Buffer> =>
  axios.get(url, { responseType: 'arraybuffer' })
    .then(res => res.data)
    .catch(() => {
      throw { message: COULD_NOT_DOWNLOAD_ALL_PDFS }
    })

export default (pdfUrls: string[]): Promise<Buffer[]> =>
  Promise.all(pdfUrls.map(getPdfBuffer))