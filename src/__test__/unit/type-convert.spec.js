import { nameToId, idToName } from '../../utils/type-convert.js';


describe('Twit types ------->', () => {
    it('should return typeId 1 ', () => {
        expect(nameToId('twit')).toBe("1");
    });

    it('should return type name quote', () => {
        expect(idToName("3")).toBe('quote');
    });
});