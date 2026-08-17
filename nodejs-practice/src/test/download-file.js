const fs = require('fs');
const https = require('https');

https.get('https://www.refworld.org/pdfid/5a9d02af4.pdf', function(res) {
  res.pipe(fs.createWriteStream('5a9d02af4.pdf'));
});

