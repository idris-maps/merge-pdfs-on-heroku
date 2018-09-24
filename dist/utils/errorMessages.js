"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VALIDATION_ERROR = 'Validation error';
exports.COULD_NOT_DOWNLOAD_ALL_PDFS = 'Could not download all pdfs';
exports.COULD_NOT_MERGE_PDFS = 'Could not merge pdfs';
exports.UNKNOWN_ERROR = 'Unknown error';
exports.isNotAnArrayOfStrings = (path) => ({
    message: exports.VALIDATION_ERROR,
    errors: [`${path.join('.')} must be an array of strings`]
});
//# sourceMappingURL=errorMessages.js.map