class ObjBuilder {
    parse(data) {
        let results = [];
        data.forEach((wbs, idx) => {
            let unpacked = this.unpack(wbs.toJSON());
            results.push(unpacked);
        })
        return results;
    }

    unpack(data) {
        let str = '';
        for (let i in data) {
            if (i !== '__v') {
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