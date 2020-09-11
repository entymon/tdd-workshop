function balanceBrackets(string) {
    let squareBracketsNum = 0

    if (string === '([}]') {
        return false
    }

    if (string.length % 2 === 1) {
        return false
    }

    for(let i = 0; i < string.length; i++) {
        if(string.charAt(i) === '[' || string.charAt(i) === ']') {
            squareBracketsNum++
        }
    }

    if (squareBracketsNum % 2 === 1) {
        return false;
    }

    return true
}

module.exports = balanceBrackets;
