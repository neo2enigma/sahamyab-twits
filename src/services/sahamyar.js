import fetch from '../utils/fetch.js';


// Twit external service
export async function sahamyarTwits(cb) {
    try {
        const params = {
            url: process.env.EXTERNAL_ENDPOINT,
            option: {
                method: 'GET',
                headers: {
                    'User-Agent': 'Chrome/61'
                }
            }
        };

        const types = ['twit', 'retwit', 'quote'];


        const result = await fetch(params);

        if (!result.success)
            throw Error();

        const newItems = cb(result.items, types);

        return newItems;

    } catch (error) {
        throw new Error(error);
    }
}

// export default sahamyarTwits;