/**
 * Class for parsing and unpacking Results. Filter Class for database results.
 */
class ObjBuilder {
    /**
     * Loops through the results coming from the Response see {@link ResponseBuilder}
     * @param {Array} data Array of results containing elements that should not be returned to the client
     * @returns {object}
     */
    parse(resData) {
        let results = [];
        resData.forEach((wbs, idx) => {
            let unpacked = this.unpack(wbs.toJSON());
            results.push(unpacked);
        })
        return results;
    }
    /**
     * Filters out unnecessary information and Unpacks the objects into a new array.
     * @param {Object} data Array of results containing elements that should not be returned to the client
     * @returns {Object}
     */
    unpack(data) {
        let str = '';
        for (let i in data) {
            if (i !== '__v' && i !== 'userId') {
                if (typeof data[i] === "number") {
                    str += `"${i}":${data[i]},`
                } else if (typeof data[i] === "object") {
                    if (i === '_id') {
                        str += `"${i}":"${data[i]}",`
                    } else {
                        str += `"${i}":${data[i]},`
                    }
                } else {
                    str += `"${i}":"${data[i]}",`
                }
            }
        }
        const nstr = str.slice(0, -1)
        const objStr = `{${nstr}}`
        const cleanedObj = JSON.parse(objStr);
        return cleanedObj;
    }
}

module.exports = ObjBuilder;