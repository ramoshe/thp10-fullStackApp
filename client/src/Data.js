/**
 * This is a helper class that provides utility methods
 * to allow the React client to talk to the Express server.
 */
export default class Data {
    api(path, method='GET', body=null, requiresAuth=false, credentials=null) {
        const url = 'http://localhost:5000/api' + path;

        const options = {
            method,
            headers: {
                'Content-Type': 'aplication/json; charset=utf-8'
            }
        };

        if (body !== null) {
            options.body = JSON.stringify(body);
        }

        return fetch(url, options);
    }

    async getUser() {
        // TODO
    }

    async createUser() {
        // TODO
    }
}