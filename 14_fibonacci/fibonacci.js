const fibonacci = function(num) {
    if (num < 0){
        return "OOPS";
    }
    return Math.floor(((((1 + (5 ** (1/2)))/2)**num) - (((1 - (5 ** (1/2)))/2)**num))/(5 ** (1/2)));
};

// Do not edit below this line
module.exports = fibonacci;
