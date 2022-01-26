const min = function (arg1, arg2) {
    try {
        Array.from(arguments).forEach(arg => tryToParseToNumber(arg));

        return Number(arg1) < Number(arg2) ? printArgument(arg1) : printArgument(arg2);
    } catch (error) {
       return error.message;
    }
}

const printArgument = (arg) => `The min value is ${arg}`;

function tryToParseToNumber(arg) {
    if (isNaN(Number(arg))) {
        throw { message: `The given argument '${arg}' is not a number` }
    }

    return Number(arg);
}


console.log(min('5', 'd2'));