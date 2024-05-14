const fs = require('fs');
const path = require('path');

const htmlFilePath = path.join(__dirname, 'index.html');
let htmlContent = fs.readFileSync(htmlFilePath, 'utf8');

htmlContent = htmlContent.replace('__NEXT_PUBLIC_DOMAIN_LIST__', process.env.NEXT_PUBLIC_DOMAIN_LIST);

fs.writeFileSync(htmlFilePath, htmlContent);