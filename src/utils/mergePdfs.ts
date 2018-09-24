import * as pdftk from 'node-pdftk'
import { COULD_NOT_MERGE_PDFS } from './errorMessages'

export default (buffers: Buffer[]): Promise<Buffer> =>
  pdftk
    .input(buffers)
    .output()
    .catch(() => {
      throw { message: COULD_NOT_MERGE_PDFS }
    })