"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pdftk = require("node-pdftk");
const errorMessages_1 = require("./errorMessages");
exports.default = (buffers) => pdftk
    .input(buffers)
    .output()
    .catch(() => {
    throw { message: errorMessages_1.COULD_NOT_MERGE_PDFS };
});
//# sourceMappingURL=mergePdfs.js.map