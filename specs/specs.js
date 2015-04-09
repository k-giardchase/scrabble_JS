describe('scrabble', function() {
    it("it should return 1 for a single character of value 1", function() {
        expect(scrabble('a')).to.equal(1);

    });

    it("should return 2 for a two character word with a value of 2", function() {
        expect(scrabble('ae')).to.equal(2);
    });

    it("should return 3 for a two character word with letters valuing 1 and 2", function() {
        expect(scrabble('ad')).to.equal(3);
    });

    it("should return 6 for a three character word with letters valuing 1, 2, and 3", function() {
        expect(scrabble('bad')).to.equal(6);
    });

    it("should return 10 for a four character word with letters valuing 1, 2, 3, and 4", function() {
        expect(scrabble('adbf')).to.equal(10);
    });

});
