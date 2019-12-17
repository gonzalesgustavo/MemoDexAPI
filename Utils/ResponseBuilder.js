module.exports = class Response {
    static success(message, status, data, success) {
        return {
            success,
            message,
            status,
            result: data
        }
    }
    static failed(message, status, error, success) {
        return {
            success,
            message,
            status,
            result: error
        }
    }
    static noContent(message, status, success) {
        return {
            success,
            message,
            status,
            result: null
        }
    }
}