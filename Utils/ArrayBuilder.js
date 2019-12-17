const ToArray = (str) => {
    const spaceless = str.replace(/\s/g, '');
    const formStr = spaceless.split(',');
    return formStr;
}

module.exports = ToArray;