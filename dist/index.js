"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const ramda_1 = require("ramda");
const processEnv_1 = require("./processEnv");
const getPdfBuffers_1 = require("./utils/getPdfBuffers");
const mergePdfs_1 = require("./utils/mergePdfs");
const validateBody_1 = require("./middleware/validateBody");
const errorMessages_1 = require("./utils/errorMessages");
const app = express();
app.use(bodyParser.json());
app.get('/', (req, res) => res.status(200).json({ msg: 'hello' }));
app.post('/merge-pdfs', [
    validateBody_1.isAnArrayOfStrings(['pdfUrls']),
], (req, res) => getPdfBuffers_1.default(ramda_1.prop('pdfUrls', req.body))
    .then(mergePdfs_1.default)
    .then(buffer => res.status(200).send(buffer))
    .catch(err => {
    if (err.message === errorMessages_1.COULD_NOT_DOWNLOAD_ALL_PDFS || err.message === errorMessages_1.COULD_NOT_MERGE_PDFS) {
        return res.status(500).json(err);
    }
    return res.status(500).json({ message: errorMessages_1.UNKNOWN_ERROR });
}));
app.listen(processEnv_1.default.port, () => {
    console.log(`Listening on ${processEnv_1.default.port}...`);
});
//# sourceMappingURL=index.js.map