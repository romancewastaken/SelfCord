var path = require('path');

function logError(error)
{
    var dirname = path.dirname(filePath);
    fs.writeFileSync(`${dirname}/${"error"}.${extension}`, error);    
}

module.exports = 
{
    logError
}