var scrabble = function(input) {
    var points = {
        a: 1, e:1
    };
    var score = 0;
    var split_input = input.split('');

    split_input.forEach(function(letter) {
        score += points[letter];


    });
    return score;
}
