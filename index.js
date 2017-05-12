// @flow
const promisify = require('typeable-promisify');
const {writeFile} = require('graceful-fs');

let writeFileAsync = (filePath /* : string */, fileContents /* : string */) /*: Promise<void> */ => {
  return promisify(cb => writeFile(filePath, fileContents, cb));
};

module.exports = writeFileAsync;
