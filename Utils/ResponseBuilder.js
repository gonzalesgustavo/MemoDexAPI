const ObjBulder = require('./ObjectBuilder');
const generalErrorMessage = "Possible server error or id/data failed to meet API criteria please refer to the documentation for route specific requirements";

class Response {
    static build(success, msg, status, res, resLimit = 10) {
        return {
            success,
            resultLimit: resLimit,
            resultCount: !success ? null : res.length,
            message: msg,
            status,
            results: res
        }
    }
}


module.exports = class ResponseBuilder {
    static success(message, data, amount = 10) {
        let parser = new ObjBulder();
        let results = parser.parse(data);
        return Response.build(true, message, 200, results);
    }
    static failed(error, statusCode = 404, message = generalErrorMessage) {
        return Response.build(false, message, statusCode, `${error}`, null);
    }
}