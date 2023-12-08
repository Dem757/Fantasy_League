var expect = require('chai').expect;
var getTeamMW = require('../../../middleware/team/getTeamMW');

describe('getTeamMW middleware ', function () {
    it('should return a team', function (done) {
        const mw = getTeamMW({
            TeamModel: {
                findOne: (p1) => {
                    expect(p1).to.be.eql({ _id: '1234' });
                    return Promise.resolve('mockteam');
                }
            }
        });

        const resMock = {
            locals: {}
        };

        mw({
            params: {
                teamid: '1234'
            }
        },
            resMock,
            (error) => {
                expect(error).to.be.eql(undefined);
                expect(resMock.locals).to.be.eql({ team: 'mockteam' });
                done();
            });
    });
    it('should call next with error when there is a problem', function (done) {
        const mw = getTeamMW({
            TeamModel: {
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
                teamid: '1234'
            }
        },
            resMock,
            (error) => {
                expect(error).to.be.eql('error');
                done();
            });
    });
    it('should call next when there is no team', function (done) {
        const mw = getTeamMW({
            TeamModel: {
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
                teamid: '1234'
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