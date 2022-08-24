import filterJson from '../../utils/filter-json.js';

const arr = [{
    id: "425662327",
    type: "twit",
},
{
    id: "425662242",
    type: "retwit",
}];


const types = ['twit', 'retwit', 'quote'];

describe('Twit types JSON filter --------->', () => {


    const result = filterJson(arr, types);
    it('should check the return value type to be array', () => {

        // expect(filterJson()).toBe(true);
        expect(Array.isArray(result)).toBe(true);
    });

    it('should check if array filtered', () => {

        expect(filterJson(arr, types)).toEqual(expect.arrayContaining(arr));
    });

});