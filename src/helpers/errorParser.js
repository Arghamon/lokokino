const ErrorParser = function () { }

ErrorParser.prototype.GetErrorObject = function (errorMessage, errorName) {
    console.log(errorMessage)
    let errorObject = {};
    let errorArray = errorMessage.split(', ');
    let firstItem = errorArray[0].split(': ').slice(1).join(':');
    errorArray.splice(0, 1, firstItem);
    errorArray.forEach((item, i) => {
        const key = item.split(':')[0];
        const value = item.split(':')[1];
        errorObject[key] = value;
    })
    return { [errorName]: errorObject };
}

module.exports = new ErrorParser();


