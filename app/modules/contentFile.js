const fs = require('fs');

const getFile = async (filename) => {
  return new Promise((resolve, reject) => {
    fs.access(`${__dirname}/../file/${filename}`, fs.F_OK, function(err) {
      if (err) {
        reject(err);
      }
      let fileReaded;
      fileReaded = fs.createReadStream(`${__dirname}/../file/${filename}`);
      fileReaded.on('error', () => {
        throw new Error(`Falla al leer archivo ${filename}`);
      });

      resolve(fileReaded);
    });
  });
};

module.exports = getFile;
