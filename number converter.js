let input = 255
let output = ''

function convert(number) {
    if (number > 0) {
        if (number % 2 === 0) {
            output += 0
        } else {
            output += 1
        }
        number = Math.floor(number / 2)
        convert(number)
    }
}

function reverse(string) {
    return string.split("").reverse().join("");
}

convert(input)
output = reverse(output)
console.log(output)


//////////////////////////////////////////////////////


let input = 16
let solution = ''

function convert(number) {
    let output = ''
    function toBinary(number) {
        if (number > 0) {
            if (number % 2 === 0) {
                output += 0
            } else {
                output += 1
            }
            number = Math.floor(number / 2)
            toBinary(number)
        }
    }
    toBinary(number)
    return output.split('').reverse().join('')
}

console.log(convert(input))


////////////////////////////////////////////////////


let input = 420
let solution = ''
let iteratie = 0

function convert(number) {
    let output = ''


    while (number > 0) {
        if (number % 2 === 0) {
            output += 0
        } else {
            output += 1
        }
        number = Math.floor(number / 2)
        iteratie++
    }

    return output.split('').reverse().join('')
}

console.log(convert(input))
console.log(iteratie)
