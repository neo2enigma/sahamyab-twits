import types from '../config/twit-types.js';


// convert type name to type id
export function nameToId(name) {
    try {
        return types[name];
    } catch (error) {
        throw new Error(error);
    }
}

// convert type id to type name
export function idToName(id) {
    try {
        return Object.keys(types).find(key => types[key] === id);
    } catch (error) {
        throw new Error(error);
    }
}