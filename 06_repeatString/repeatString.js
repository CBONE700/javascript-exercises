const repeatString = function(str, numRepeats) {
    let repeatedStr = ''
    if(numRepeats >= 0)
    {
        for(let i = 0; i < numRepeats; i++)
            {
                repeatedStr += str;
            }

    }
    else
    {
        repeatedStr += 'ERROR';
    }
    return repeatedStr;
};

// Do not edit below this line
module.exports = repeatString;
