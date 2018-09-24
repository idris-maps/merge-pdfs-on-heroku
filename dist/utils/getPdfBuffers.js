"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const errorMessages_1 = require("./errorMessages");
const getPdfBuffer = (url) => axios_1.default.get(url, { responseType: 'arraybuffer' })
    .then(res => res.data)
    .catch(() => {
    throw { message: errorMessages_1.COULD_NOT_DOWNLOAD_ALL_PDFS };
});
exports.default = (pdfUrls) => Promise.all(pdfUrls.map(getPdfBuffer));
//# sourceMappingURL=getPdfBuffers.js.map