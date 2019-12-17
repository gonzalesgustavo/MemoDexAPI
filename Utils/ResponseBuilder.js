
const generalErrorMessage = "Possible server error or id/data failed to meet API criteria please refer to the documentation for route specific requirements";

module.exports = class Response {
    static success(message, status, data, success) {
        return {
            success,
            message,
            status,
            result: data
        }
    }
    static failed(error, statusCode = 404, message = generalErrorMessage) {
        return {
            success: false,
            message,
            status: statusCode,
            result: error
        }
    }
    static noContent(caller) {
        return {
            success: true,
            message: `${caller} was removed successfully`,
            status: 200,
            result: null
        }
    }
}