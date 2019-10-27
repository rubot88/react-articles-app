export default class LoadArticles {
    constructor() {
        this._urlBase = 'http://localhost:3000';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._urlBase}${url}`);
        if (!res.ok) {
            throw new Error(`Couldn't fetch ${url}; received ${res.status}`);
        }
        return await res.json();
    }

    getAllArticles = async () => {
        const res = await this.getResource('/articles');
        return res;
    }
}