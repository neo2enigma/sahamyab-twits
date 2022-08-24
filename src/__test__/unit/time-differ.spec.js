import timeDiffer from "../../utils/time-differ";


describe('Time difference -------->', () => {
    it('should return time different', () => {
        const date = "2022-08-23 11:15:12+04:30";
        expect(typeof timeDiffer(date)).toEqual('number');
    });
});
