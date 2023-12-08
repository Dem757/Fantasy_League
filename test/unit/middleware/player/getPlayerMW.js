var expect = require('chai').expect;
var getPlayerMW = require('../../../middleware/player/getPlayerMW');

describe('getPlayerMW middleware ', function () {
    it('should return a player', function (done) {
        const mw = getPlayerMW({
            PlayerModel: {
                findOne: (p1) => {
                    expect(p1).to.be.eql({ _id: '1234' });
                    return Promise.resolve('mockplayer');
                }
            }
        });

        const resMock = {
            locals: {}
        };

        mw({
            params: {
                playerid: '1234'
            }
        },
            resMock,
            (error) => {
                expect(error).to.be.eql(undefined);
                expect(resMock.locals).to.be.eql({ teamplayer: 'mockplayer' });
                done();
            });
    });
    it('should call next with error when there is a problem', function (done) {
        const mw = getPlayerMW({
            PlayerModel: {
                findOne: (p1) => {
                    expect(p1).to.be.eql({ _id: '1234' });
                    return Promise.reject('error');
                }
            }
        });

        const resMock = {
            locals: {}
        };

        mw({
            params: {
                playerid: '1234'
            }
        },
            resMock,
            (error) => {
                expect(error).to.be.eql('error');
                done();
            });
    });
    it('should call next when there is no player', function (done) {
        const mw = getPlayerMW({
            PlayerModel: {
                findOne: (p1) => {
                    expect(p1).to.be.eql({ _id: '1234' });
                    return Promise.resolve(undefined);
                }
            }
        });

        const resMock = {
            locals: {}
        };

        mw({
            params: {
                playerid: '1234'
            }
        },
            resMock,
            (error) => {
                expect(error);
                expect(resMock.locals).to.be.eql({});
                done();
            });
    });
});