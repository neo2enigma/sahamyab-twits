import fetch from 'node-fetch';

// HTTP fetch client
async function httpClient(params) {
    try {
        const response = await fetch(params.url, params.option);

        if (!response.ok)
            throw new Error;

        const result = await response.json();
        return result;

    } catch (error) {
        throw new Error(error);
    }

}

export default httpClient;
