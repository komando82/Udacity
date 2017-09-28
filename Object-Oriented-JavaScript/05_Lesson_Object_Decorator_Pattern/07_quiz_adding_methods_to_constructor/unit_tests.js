describe("TEST: A new carlike object should have a move method.", function() {
    it("\nA new carlike can move: ", function() {
        expect(carlike({}, 1)).to.respondTo('move');
    });
});
  
describe("TEST: amy should have moved from 1 to 2.", function() {
    it("\nAmy moved from 1 to 2: ", function() {
      amy.loc.should.be.equal(2);
    });
});
  
describe("TEST: ben should have moved from 9 to 10.", function() {
    it("\nBen moved from 9 to 10: ", function() {
      ben.loc.should.be.equal(10);
    });
});