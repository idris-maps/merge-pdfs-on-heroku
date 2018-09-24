interface ErrorMessage {
  message: string
  errors?: any[]
}

export const VALIDATION_ERROR = 'Validation error'
export const COULD_NOT_DOWNLOAD_ALL_PDFS = 'Could not download all pdfs'
export const COULD_NOT_MERGE_PDFS = 'Could not merge pdfs'
export const UNKNOWN_ERROR = 'Unknown error'

export const isNotAnArrayOfStrings = (path: string[]): ErrorMessage => ({
  message: VALIDATION_ERROR,
  errors: [`${path.join('.')} must be an array of strings`]
})
