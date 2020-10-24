let input = 420
let solution = ''

function convert(number) {
    let output = ''

    while (number > 0) {
        if (number % 2 === 0) {
            output = 0 + output
        } else {
            output = 1 + output
        }
        number = Math.floor(number / 2)
    }
    return output
}

console.log(convert(input))
