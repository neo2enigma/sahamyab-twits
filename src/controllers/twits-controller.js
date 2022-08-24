import { sahamyarTwits } from '../services/sahamyar.js';
import filterJson from '../utils/filter-json.js';
import * as modelTwits from '../models/twits-model.js';
import { idToName, nameToId } from '../utils/type-convert.js';
import timeDiffer from '../utils/time-differ.js';

// Get twits for a given username
export async function getTwits(req, res, next) {
    try {
        const twits = await modelTwits.getTwits(req.params.username);

        // Convert typeId to type
        // Replace typeId with type
        const newTwits = twits.map(twit => {
            Object.assign(twit, { type: idToName(twit.typeId) });
            const { typeId: _, ...newTwit } = twit;
            return newTwit;
        });

        return res.status(200).json(newTwits);
    } catch (error) {
        next(error);
    }
}

// Delete twit for a given twit id
export async function deleteTwit(req, res, next) {
    try {
        await modelTwits.deleteTwit(req.params.id);
        return res.status(200).json({ message: 'Record deleted' });
    } catch (error) {
        next(error);
    }
}

// Add twit to database
export async function addTwits(req, res, next) {
    try {

        // Fetch twits from sahamyar and filter based on type
        const twits = await sahamyarTwits(filterJson);

        // Add new usernames if new
        await Promise.all(twits.map(async twit => await modelTwits.addUser(twit)));

        // Convert type to typeId
        // Add type to each twit object
        // Add twits to database
        //! Since this method only adds new records with time limit of less than 60 seconds, to bypass this constrain
        //! BYPASS_TIME should set to true
        const ids = await Promise.all((twits.filter(twit => (Boolean(+process.env.BYPASS_TIME)) || timeDiffer(twit.sendTime) < 60000))
            .map(async twit => await modelTwits.addTwit({ ...twit, type: nameToId(twit.type) })));

        return res.json({ ids });
    } catch (error) {
        next(error);
    }
}