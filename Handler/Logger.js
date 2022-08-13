var path = require('path');

var fs = require('fs');

var os = require('os');

var dirname = `C:/Users/${os.userInfo().username}/AppData/Roaming/SelfCord`;

function logError(error)
{
    if (fileExists(dirname))
    {
        fs.writeFileSync(`${dirname}/error.log`, error); 
    }
    
    else
    {
        fs.mkdirSync(dirname, 
            {
                recursive: true
            });

            fs.writeFileSync(`${dirname}/error.log`, error); 
    }
}

function fileExists(path)
{
    if (fs.existsSync(path))
    {
        return true;
    }

    else if (!fs.existsSync(path))
    {
        return false;
    }
}

module.exports = 
{
    logError
}