const palindromes = function (str) {
    let newStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let i = 0;
    let j = newStr.length - 1;
    while (j > i)
    {
        if (newStr[i] != newStr[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
