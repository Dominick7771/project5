import ENDPOINTS from "modules/endpoints";

const BASE_URL = 'http://localhost:3004';

class Api {
    constructor(baseURL, endpoints) {
        this.baseURL = baseURL;
        this.endpoints = endpoints;
    }

    generateRequest(endpoint, data) {
        const {method, uri} = this.endpoints[endpoint];

        return fetch(`${this.baseURL}${uri}`, {method, body: data});
    }

    async fetch(endpoint, data) {
        const response = await this.generateRequest(endpoint, data);

        return response.json();
    }
}

export default new Api(BASE_URL, ENDPOINTS);