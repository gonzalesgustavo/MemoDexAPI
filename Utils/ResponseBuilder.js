const ObjBulder = require('./ObjectBuilder');
/** @type {String} */
const generalErrorMessage = "Possible server error or id/data failed to meet API criteria please refer to the documentation for route specific requirements";

/**
 * Class to Create Responses
 */
class Response {
    /**
     * Builds the response as an object 
     * @param {Boolean} success Informs front end if response is successful or not 
     * @param {String} msg Simple message describing Action 
     * @param {number} status HTTP Status code
     * @param {Array | Object} res Array of objects fetched from database or Other data
     * @param {Number} resLimit Limitation on requests to certian routes described here
     * @returns {object}
     */
    static build(success, msg, status, res, resLimit = 10) {
        return {
            success,
            resultLimit: resLimit,
            resultCount: !success ? null : res.length,
            message: msg,
            status,
            results: res || token
        }
    }
}


/**
 * Class to create a person object
 */
class ResponseBuilder {
    /**
     * Success Response Factory
     * @param {String} message Simple Message Assigned per route
     * @param {Array} data Data comming from the Database 
     * @param {null | String} token JWT Token or null
     * @param {Number} amount Result limitation
     */
    static success(message, data, token, amount = 10) {
        let parser = new ObjBulder();
        let results = !data ? token : parser.parse(data);
        return Response.build(true, message, 200, results);
    }
    /**
     * Failure Response Factory
     * @param {String} error Stringified JSON  
     * @param {Number} statusCode Error status code (Refer to HTTP Status Codes)
     * @param {String} message  Generic Message
     */
    static failed(error, statusCode = 404, message = generalErrorMessage) {
        return Response.build(false, message, statusCode, `${error}`, null);
    }
}

module.exports = ResponseBuilder;