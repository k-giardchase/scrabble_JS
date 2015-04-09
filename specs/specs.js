describe('scrabble', function() {
    it("it should return 1 for a single character of value 1", function() {
        expect(scrabble('a')).to.equal(1);

    });

    it("should return 2 for a two character word with a value of 2", function() {
        expect(scrabble('ae')).to.equal(2);
    });

});
