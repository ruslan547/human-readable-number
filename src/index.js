module.exports = function toReadable(number) {
    const unitsAndTensText = [
        '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
        'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
        'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
    const tensText = [
        '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty',
        'seventy', 'eighty', 'ninety'
    ];

    const hundreds = Math.floor(number / 100);
    const tens = Math.floor(number % 100 / 10);
    const units = number % 10;
    const tensBeforeTwenty = number % 100;
    let result = '';

    if (number === 0) {
        return 'zero';
    }

    if (number >= 100) {
        result = unitsAndTensText[hundreds] + ' hundred ';
    }

    if (tens >= 2) {
        result += tensText[tens];

        if (units) {
            result += ' ' + unitsAndTensText[units];
        }
    } else if (tens) {
        result += unitsAndTensText[tensBeforeTwenty];
    } else {
        result += unitsAndTensText[units];
    }

    return result.trim();
}
