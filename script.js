function convertToRoman(num) {
	const romanNumerals = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];

    let romanNumeral = '';

    for (let i = 0; i < romanNumerals.length; i++) {
        const symbol = romanNumerals[i][0];
        const value = romanNumerals[i][1];
        while (num >= value) {
            romanNumeral += symbol; // Append the Roman numeral
            num -= value;           // Subtract the value from num
        }
    }

    return romanNumeral;
}

console.log(convertToRoman(798));




// do not edit below this line
module.exports = convertToRoman
