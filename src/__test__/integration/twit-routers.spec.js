// import Server from '../../startups/server.js';
import '../../startups/load-env.js';
import globalMiddlewares from '../../startups/global-middlewares.js';
import routers from '../../startups/router.js';
import request from 'supertest';
import app from '../../startups/express-app.js';
import * as modelTwits from '../../models/twits-model.js';
import * as mockData from './mock-data.js';
import * as sahamyab from '../../services/sahamyar.js';


describe('Integration Test for Twits Routes ------>', () => {
    const mGetTwitModel = jest.spyOn(modelTwits, "getTwits");
    const mDeleteTwitModel = jest.spyOn(modelTwits, "deleteTwit");
    const mSahamyabTwits = jest.spyOn(sahamyab, "sahamyarTwits");

    const mAddUserModel = jest.spyOn(modelTwits, "addUser");
    const mAddTwitModel = jest.spyOn(modelTwits, "addTwit");


    beforeAll(() => {
        globalMiddlewares(app);
        routers(app);

    });

    afterAll(() => {
        mGetTwitModel.mockRestore();
        mDeleteTwitModel.mockRestore();
        mSahamyabTwits.mockRestore();
        mAddUserModel.mockRestore();
        mAddTwitModel.mockRestore();

    });

    describe('Integration Test for GET /api/twits/:username ------->', () => {

        mGetTwitModel.mockResolvedValue(mockData.dbTwits);

        it('should return status 200 on valid request', async () => {
            const res = await request(app).get('/api/twits/mohsensls');
            expect(res.status).toEqual(200);
        });

        it('should call model function with a params', async () => {
            const res = await request(app).get('/api/twits/mohsensls');
            expect(mGetTwitModel).toHaveBeenCalledWith('mohsensls');
        });

        it('should return expected response', async () => {
            const res = await request(app).get('/api/twits/mohsensls');
            expect(res.body).toEqual(expect.arrayContaining([
                expect.objectContaining(mockData.dbTwitsExpected1),
                expect.objectContaining(mockData.dbTwitsExpected2)
            ]));
        });

    });

    describe('Integration Test for DELETE /api/twits/:id ------->', () => {
        it('should call deleteTwit once', async () => {
            await request(app).delete('/api/twits/123456');
            expect(mDeleteTwitModel).toHaveBeenCalledTimes(1);
            expect(mDeleteTwitModel).toHaveBeenCalledWith("123456");
        });
    });

    describe('Integration Test for POST /api/twits/ ------->', () => {
        mSahamyabTwits.mockResolvedValue(mockData.twits);
        mAddUserModel.mockResolvedValue({});
        mAddTwitModel.mockResolvedValue({ id: '425735487' });
        mAddTwitModel.mockResolvedValueOnce({ id: '425735490' });
        it('should return ids after adding twits', async () => {
            const result = await request(app).post('/api/twits');
            expect(mSahamyabTwits).toHaveBeenCalledTimes(1);
            expect(mAddUserModel).toHaveBeenCalled();
            expect(mAddTwitModel).toHaveBeenCalled();
            expect(result.body).toEqual(expect.objectContaining({ ids: expect.arrayContaining([{ id: '425735487' }, { id: '425735490' }]) }));

        });
    });
});
