const sumAll = function(a, b) 
{
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b))
    {
        return 'ERROR';
    }
    let count = 0;

    if (a < b)
    {
        for(a; a <= b; a++)
            {
                count += a;
            }
    }
    else
    {
        for(b; b <= a; b++)
            {
                count += b;
            }
    }
    return count;
};

// Do not edit below this line
module.exports = sumAll;
